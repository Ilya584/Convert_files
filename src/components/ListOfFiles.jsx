import Field from './Field'

const ListOfFiles = (props) =>{
const{
tasks = []
} = props;




    const has_tasks = true; //заглушка
    if(!has_tasks){
        return <p>Очередь пуста</p>
    }

    return(
        <ul className="list_of_files">
              
              {tasks.map((task) =>(
                <Field
                id_files = {task.id_files}
                className = {task.className}
                name = {task.name}
                file_extension = {task.file_extension}
                file_size = {task.file_size}
                content_img = {task.content_img}
                ime_start = {task.time_start}
                time_end = {task.time_end}
                is_dan = {task.is_dan}
                ></Field>
              ))}
              
            </ul>
    )
}

export default ListOfFiles;