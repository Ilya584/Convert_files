import WUM from './WUM';
import Droper from './Droper';
import Blok_Of_Compeleted_Actions from './Blok_Of_Compeleted_Actions';
import {FilesContext} from './context/FilesContext';
import { useState } from 'react';
import { createContext, useContext } from 'react';

const MainBlock = () => {
  const [files, setFiles] = useState([]);
  



  const handleAddSingleItem = ( file,format,formatFileSize ) => {
    setFiles(prev => [...prev, { file, id: crypto.randomUUID(), file_format: format, file_size: formatFileSize}]);
  };

    return(
    // <ActionContext.Provider value={handleAddSingleItem}>
    <FilesContext.Provider value = {{
      files,
      handleAddSingleItem,
      
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