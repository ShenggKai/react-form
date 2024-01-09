/* eslint-disable react/prop-types */
import React from "react";
import ReactModal from "react-modal";
import "./style.css";
import { Text, Input, Button } from "../../components";
import { CloseIcon } from "../../assets";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
};

const Modal = ({ modalIsOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Forget Password Modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      <div className="Modal-container">
        <div className="Modal-Header">
          <Text size={17.5} color={"#343A40"} fontWeight={700}>
            Quên mật khẩu
          </Text>
          <div className="Modal-Icon" onClick={() => closeModal()}>
            <CloseIcon />
          </div>
        </div>

        <Input value={2} isError={false} />
        <div style={{ padding: "7px" }}>
          <Button>Khôi phục</Button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
