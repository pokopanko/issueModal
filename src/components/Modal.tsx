// src/components/Modal.tsx
import React, { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import "./ModalStyles.css"; // CSSファイルをimport

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (username: string, password: string) => void;
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleComplete = () => {
    onSubmit(username, password);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modalContainer">
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="textField"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="textField"
        />
        <Button onClick={handleComplete} className="completeButton">
          完了
        </Button>{" "}
        {/* CSSクラスを適用 */}
      </Box>
    </Modal>
  );
};

export default CustomModal;
