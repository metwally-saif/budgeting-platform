import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  useListExpenseTypeByUserId,
} from "../hooks";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser } from "../hooks";

export default function ImportPage(): JSX.Element {
  const { user } = useUser();
  const { expenseTypes } = useListExpenseTypeByUserId();
  const [expenseType, setExpenseType] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const client = generateClient<Schema>({ authMode: "userPool" });

  const handleFile = async (file: File) => {
    if (!user || !expenseType) return;
    setLoading(true);
    const ext = file.name.split(".").pop()?.toLowerCase();
    let rows: Record<string, string>[] = [];

    if (ext === "csv") {
      const text = await file.text();
      const lines = text.trim().split(/\r?\n/);
      const headers = lines[0].split(",");
      rows = lines.slice(1).map((line) => {
        const values = line.split(",");
        const row: Record<string, string> = {};
        headers.forEach((h, idx) => {
          row[h.trim()] = values[idx];
        });
        return row;
      });
    } else if (ext === "xlsx" || ext === "xls") {
      const mod = await import(
        "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/+esm"
      );
      const array = await file.arrayBuffer();
      const workbook = mod.read(array, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      rows = mod.utils.sheet_to_json(sheet);
    }

    for (const r of rows) {
      const amount = parseFloat(r.Amount || r.amount || "0");
      const date = r.Date || r.date;
      const description = r.Description || r.description || "Imported";
      if (!date || isNaN(amount)) continue;
      const expenseRes = await client.models.Expense.create({
        name: description,
        assigned: amount,
        date: new Date(date).toISOString(),
        expenseTypeId: expenseType,
        userId: user.sub,
      });
      if (expenseRes?.data?.id) {
        await client.models.HistoryExpense.create({
          expenseId: expenseRes.data.id,
          expenseTypeId: expenseType,
          date: new Date(date).toISOString(),
          assigned: amount,
          userId: user.sub,
        });
      }
    }
    setLoading(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        Import Bank Statement
      </Typography>
      <FormControl sx={{ minWidth: 200, mb: 2 }}>
        <InputLabel id="expense-type-label">Expense Type</InputLabel>
        <Select
          labelId="expense-type-label"
          value={expenseType}
          label="Expense Type"
          onChange={(e) => setExpenseType(e.target.value as string)}
        >
          {expenseTypes?.map((et) => (
            <MenuItem key={et.id} value={et.id}>
              {et.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button variant="contained" component="label" disabled={loading || !expenseType}>
          {loading ? "Uploading..." : "Select File"}
          <input type="file" hidden onChange={onChange} />
        </Button>
      </Box>
    </Box>
  );
}
