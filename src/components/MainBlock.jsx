import WUM from './WUM';
import Droper from './Droper';
import Blok_Of_Compeleted_Actions from './Blok_Of_Compeleted_Actions';
import {FilesContext} from './context/FilesContext';
import { useState,useEffect } from 'react';
// import { createContext, useContext } from 'react';
import './style/ForMainBlock.css';
const MainBlock = () => {
  const [files, setFiles] = useState(() =>{
    const savedFiles = localStorage.getItem('files');
    if(savedFiles){
      return JSON.parse(savedFiles);
    }
    return [];
  });
  const [comp_files, setCompFiles] = useState([]);

  //<<Для удаления одного элемента из списка
  const [comp, setComp] = useState(false); 
  const trigger = (e) =>{
  setComp(e);
} 

  const onDeletTask = (id) =>{
  comp ?setCompFiles(comp_files.filter((file) => file.id !== id)):setFiles(files.filter((file) => file.id !== id));
  console.log(files);
}
//Для удаления одного элемента из списка>>
const onDeleteAllButtonC1ick = () =>{
!comp ?setFiles([]):setComp_Files([]);
}

  const handleAddSingleItem = ( fileName,format,formatFileSize ) => {
    setFiles(prev => [...prev, { fileName, id: crypto.randomUUID(), file_format: format, file_size: formatFileSize}]);
  };

    useEffect(() =>{
      localStorage.setItem('files',JSON.stringify(files))
    },[files])
    return(
    // <ActionContext.Provider value={handleAddSingleItem}>
    <FilesContext.Provider value = {{
      files,
      comp_files,
      handleAddSingleItem,
      onDeletTask,
      trigger,
      onDeleteAllButtonC1ick,
      comp
    }}>
    <main>
      
        <div className="main_container">
            <h2>Конвертер файлов</h2>
            <p>Сконвертируйте ваши файлы в любой формат</p>
          <Droper></Droper>
          
          <WUM></WUM>
         {/* <Blok_Of_Compeleted_Actions ArrayFiles = {files}></Blok_Of_Compeleted_Actions> */}
         <Blok_Of_Compeleted_Actions></Blok_Of_Compeleted_Actions>
        </div>
    </main>
    {/* </ActionContext.Provider> */}
    </FilesContext.Provider>
    )
}

export default MainBlock; 
// export const ActionContext = createContext(null);