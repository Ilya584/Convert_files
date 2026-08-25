import Field from './Field'

const ListOfFiles = () =>{
    const has_tasks = true; //заглушка
    if(!has_tasks){
        return <p>Очередь пуста</p>
    }

    return(
        <ul className="list_of_files">
              <li>
                <Field/>
              </li> 
            </ul>
    )
}

export default ListOfFiles;