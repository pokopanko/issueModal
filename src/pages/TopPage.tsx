// src/pages/TopPage.tsx
import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomModal from "../components/Modal";
import "./TopPageStyles.css"; // CSSファイルをimport

const TopPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitInfo = (username: string, password: string) => {
    // ここで受け取った情報を処理する
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="topPageContainer">
      {" "}
      {/* CSSクラスを適用 */}
      <Button onClick={handleShowModal} className="displayButton">
        表示
      </Button>{" "}
      {/* CSSクラスを適用 */}
      <CustomModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitInfo}
      />
    </div>
  );
};

export default TopPage;
