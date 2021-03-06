import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <AnimatePresence>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
