import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import { useCurrency } from "../utils/get-currency";
import { BankAccount } from "../../amplify/graphql/API";

const BankAccountFragment: React.FC<{ bankAccounts: BankAccount[] }> = ({
  bankAccounts,
}) => {
  const currency = useCurrency();
  const [userFinancialStatus, setUserFinancialStatus] = useState<number | null>(
    null,
  );

  // We’ll use MUI’s theme for consistent palette usage
  const theme = useTheme();

  useEffect(() => {
    if (!bankAccounts) return;
    const userHasNow = bankAccounts
      .map((ba) => ba.balance || 0)
      .reduce((a, b) => a + b, 0);
    setUserFinancialStatus(userHasNow);
  }, [bankAccounts]);

  // Determine the background color based on userFinancialStatus
  const getStatusColor = () => {
    if (userFinancialStatus === null) return theme.palette.grey[200]; // fallback

    // If > 0 => success color; < 0 => error color; 0 => warning color
    if (userFinancialStatus > 0) {
      return theme.palette.success.light;
    } else if (userFinancialStatus < 0) {
      return theme.palette.error.light;
    } else {
      return theme.palette.warning.light;
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: getStatusColor(),
        color: theme.palette.getContrastText(getStatusColor()),
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 220,
        margin: "0 auto",
        maxHeight: 200,
      }}
    >
      <CardContent>
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {currency} {userFinancialStatus?.toFixed(2)}
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography component="div" fontSize={16} color="textSecondary">
            Current Financial Status
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BankAccountFragment;
