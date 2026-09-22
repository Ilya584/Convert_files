
import React, { useState } from 'react';
import CooseFormatBlock from './ChooseFormatBlock'
function Droper() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
    // Проверка: мы действительно вышли из droper, а не просто зашли на иконку или текст
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
      setSelectedFile(files[0]);
     
    }
  };

  // Перехват файла при выборе через стандартную кнопку/клик
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      console.log('Файл выбран через обзор:', files[0]);
    }
  };

  return (
    <>
      <h2>Конвертер файлов</h2>
      <p>Сконвертируйте ваши файлы в любой формат</p>
      
      <CooseFormatBlock></CooseFormatBlock>

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
        />
      </div>
    </>
  );

}

export default Droper;