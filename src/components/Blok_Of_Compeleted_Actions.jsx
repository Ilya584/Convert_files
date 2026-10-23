import ListOfFiles from './ListOfFiles'
import { FilesContext } from './context/FilesContext'
import { useContext } from 'react'
import {useState} from 'react'
import './style/ForBlock_Of_Compeleted_Actions.css'
// const Blok_Of_Compeleted_Actions = ({ ArrayFiles }) =>{
  const Blok_Of_Compeleted_Actions = () =>{

    const{
      files,
      comp_files,
      trigger,
      comp,
      onDeleteAllButtonC1ick
    } = useContext(FilesContext);



    return(
       <div className="blok_of_compeleted_actions">
            <div className="pick">
            <ul className="action_choice">   
            <li><button className= {`btn ${comp? '' : 'btn_act'}`} onClick={() =>trigger(false)}>В очереди</button></li>
            <li><button className= {`btn ${comp? 'btn_act' : ''}`} onClick={() =>trigger(true)}>Завершено</button></li>
            </ul>
            <button className={`btn delete_all`} onClick={onDeleteAllButtonC1ick}>Удалить все</button>
            </div>
            <div className="list_blok">
              <ListOfFiles tasks={comp? comp_files:files}/>
            
            </div>
          </div>
    )
}

export default Blok_Of_Compeleted_Actions;