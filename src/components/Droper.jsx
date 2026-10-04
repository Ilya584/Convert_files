
import React, { useState } from 'react';
import CooseFormatBlock from './ChooseFormatBlock'
function Droper() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFiles] = useState([]);

  // Перехват файлов при перетаскивании
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Проверка на выход из droper
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const filesArray = Array.from(files);
      setSelectedFiles(filesArray);
      console.log('Файлы были сброшены через Drag And Drop', filesArray);

    }
  };

  // Перехват файла при выборе через кнопку
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filesArray = Array.from(files);
      setSelectedFiles(filesArray);
      console.log('Файлы выбраны через обзор:', filesArray);
    }
  };

  return (
    <>
     
      {selectedFile.length > 0?(
      <CooseFormatBlock files={selectedFile}></CooseFormatBlock>
      ):(
      <div 
        className={`droper ${isDragging ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="droper_ico">
          <img src="/src/assets/file.svg" alt="Файл" />
        </div>

        <label htmlFor="file-upload" className="custom-upload">
          Выберите файл
        </label>

        <input 
          type="file" 
          name="userfile" 
          className="convert" 
          id="file-upload" 
          onChange={handleFileSelect}
           multiple
        />
      </div>
      )}
    </>
  );

}

export default Droper;