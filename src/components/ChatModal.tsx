import React, { useState } from "react";
import { Box, Modal, IconButton, Typography, Paper } from "@mui/material";
import {
  useListExpenseByUserId,
  useListHistoryExpenseByUserId,
} from "../hooks";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { AIConversation, createAIHooks } from "@aws-amplify/ui-react-ai";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>({ authMode: "userPool" });
const { useAIConversation } = createAIHooks(client);

const ChatModal: React.FC = () => {
  const { expenseTypesWithExpenses } = useListExpenseByUserId();
  const { historyExpenses } = useListHistoryExpenseByUserId();
  const [open, setOpen] = useState(false);
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation("chat");

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Chat Icon Button */}
      <IconButton
        onClick={toggleModal}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "primary.main",
          color: "white",
          zIndex: 1000,
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <ChatIcon />
      </IconButton>

      {/* Chat Modal */}
      <Modal open={open} onClose={toggleModal}>
        <Paper
          sx={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bottom: 16,
            right: 16,
            width: 450,
            maxHeight: "50vh",
            overflowY: "auto",
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            minHeight: "50vh",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">Chat</Typography>
            <IconButton onClick={toggleModal}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Scrollable Chat Content */}
          <Box
            sx={{
              flexGrow: 1,

              overflowY: "auto",
              height: "100vh",
              scrollbarWidth: "thin", // For Firefox
              scrollbarColor: "#bfbfbf transparent", // For Firefox
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#bfbfbf",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#a6a6a6",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
          >
            <AIConversation
              messages={messages}
              isLoading={isLoading}
              aiContext={() => {
                return {
                  expenseTypesWithExpenses,
                  historyExpenses,
                };
              }}
              handleSendMessage={handleSendMessage}
            />
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default ChatModal;
