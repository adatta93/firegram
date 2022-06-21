import { motion } from "framer-motion";
import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{
              opacity: 1,
              rotate: [0, 5, -5, 5, 0],
              transition: {
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImg(doc.url)}>
            <motion.img
              src={doc.url}
              alt={doc.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
