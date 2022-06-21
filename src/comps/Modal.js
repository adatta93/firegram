import { motion } from "framer-motion";
import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.img
        src={selectedImg}
        alt="enlarged img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.2 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default Modal;
