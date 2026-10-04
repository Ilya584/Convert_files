

import { useState } from "react";
import { useContext } from 'react';
import { ActionContext } from './MainBlock';

const ChooseFormatBlock = ({files, onFinish}) => {
const[currentFileIndex, setCurrentFileIndex] = useState(0);
 const handleAddSingleItem = useContext(ActionContext);
if (!files || !Array.isArray(files) || files.length === 0) {
    return <div>Файлы не загружены или произошла ошибка</div>;
  }

const currentFile = files[currentFileIndex];

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 BT';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };



    const text_format = [
  { ext: '.txt', type: 'text' },
  { ext: '.log', type: 'text' },
  { ext: '.err', type: 'text' },
  { ext: '.cfg', type: 'text' },
  { ext: '.conf', type: 'text' },
  { ext: '.ini', type: 'text' },
  { ext: '.csv', type: 'text' },
  { ext: '.tsv', type: 'text' },
  { ext: '.docx', type: 'text' },
  { ext: '.doc', type: 'text' },
  { ext: '.docm', type: 'text' },
  { ext: '.dotx', type: 'text' },
  { ext: '.odt', type: 'text' },
  { ext: '.rtf', type: 'text' },
  { ext: '.pages', type: 'text' },
  { ext: '.gdoc', type: 'text' },
  { ext: '.html', type: 'text' },
  { ext: '.htm', type: 'text' },
  { ext: '.md', type: 'text' },
  { ext: '.xml', type: 'text' },
  { ext: '.json', type: 'text' },
  { ext: '.yaml', type: 'text' },
  { ext: '.yml', type: 'text' },
  { ext: '.tex', type: 'text' },
  { ext: '.bat', type: 'text' },
  { ext: '.ps1', type: 'text' },
  { ext: '.sh', type: 'text' },
  { ext: '.py', type: 'text' },
  { ext: '.js', type: 'text' },
  { ext: '.css', type: 'text' },
  { ext: '.sql', type: 'text' },

  // Фиксированная верстка (графика/документы)
  { ext: '.pdf', type: 'fixed' },
  { ext: '.djvu', type: 'fixed' },
  { ext: '.xps', type: 'fixed' },

  // Электронные книги
  { ext: '.fb2', type: 'ebook' },
  { ext: '.fb3', type: 'ebook' },
  { ext: '.epub', type: 'ebook' },
  { ext: '.mobi', type: 'ebook' },
  { ext: '.azw3', type: 'ebook' }
  ];

  const nextFile = (e) => {
    if (currentFileIndex < files.length-1){
      console.log(e.target.textContent);
    handleAddSingleItem(currentFile, e.target.textContent);
    setCurrentFileIndex(prev => prev + 1);
    
    }
    else{
    
    onFinish?.();
    }
     
    
  };


  
  
     
    
   
 

  return(
    
    <div className="choose_format">
     
        <div className="head_cf">
           <div className="content_img">
            <img src="" alt="Пикча" />
          </div>
          <div className="content_block">
            <div className="content_up">
              <h1>{currentFile?.name}</h1>
            </div>
            <div className="content_down">
              <h3>{formatFileSize(currentFile?.size)}</h3>
            </div>
          </div> 
          <div className="count">
            <h3>{currentFileIndex + 1}/{files.length}</h3>
            {console.log(files)}
          </div>
          </div>
          <hr id = "horizontal_line"></hr>
       
        <div className="body_cf">
          
      {text_format.slice(0, 8).map((item, index) => (
        <button className="format_exemple" key={index} onClick={nextFile}>{item.ext || "Null"}</button>
      ))}
        </div>
        <div className="futer_cf">
          <button id="more_formats"><img src="/src/assets/V-shaped_arrow.svg" alt="Стрелка вниз" />Другие форматы<img src="/src/assets/V-shaped_arrow.svg" alt="Стрелка вниз" /></button>
        </div>
    </div>


    )
}

export default ChooseFormatBlock; 