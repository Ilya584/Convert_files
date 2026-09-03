import ListOfFiles from './ListOfFiles'

const Blok_Of_Compeleted_Actions = () =>{

const onDeleteAllButtonC1ick = () =>{
alert("Все удалено")
}

const onDeletTask = (id) =>{
console.log(`Удалена задача № ${id}`)
}


    let files = [
  {
    id: 101,
    className: "document",
    name: "Проектная документация",
    file_extension: "pdf",
    file_size: 2457600, // 2.4 МБ
    content_img: "https://picsum.photos/200/245?random=1",
    time_start: "2026-08-27T10:00:00Z",
    time_end: "2026-08-27T10:30:00Z",
    is_dan: false
  },
  {
    id: 102,
    className: "image",
    name: "Фото профиля",
    file_extension: "jpg",
    file_size: "512KB", // 512 КБ
    content_img: "https://picsum.photos/200/245?random=2",
    time_start: "2026-08-27T11:15:00Z",
    time_end: "2026-08-27T11:20:00Z",
    is_dan: true
  },
  {
    id: 103,
    className: "spreadsheet",
    name: "Финансовый отчёт",
    file_extension: "xlsx",
    file_size: "1MB", // 1 МБ
    content_img: "https://picsum.photos/200/245?random=3",
    time_start: "2026-08-26T09:00:00Z",
    time_end: "2026-08-26T10:00:00Z",
    is_dan: false
  },
  {
    id: 104,
    className: "presentation",
    name: "Презентация проекта",
    file_extension: "pptx",
    file_size: 3072000, // 3 МБ
    content_img: "https://picsum.photos/200/245?random=4",
    time_start: "2026-08-25T14:30:00Z",
    time_end: "2026-08-25T15:00:00Z",
    is_dan: true
  },
  {
    id: 105,
    className: "archive",
    name: "Архив с исходниками",
    file_extension: "zip",
    file_size: 10240000, // 10 МБ
    content_img: "https://picsum.photos/200/245?random=5",
    time_start: "2026-08-24T16:00:00Z",
    time_end: "2026-08-24T16:05:00Z",
    is_dan: false
  }
];

    return(
       <div className="blok_of_compeleted_actions">
            <div className="pick">
            <ul className="action_choice">   
            <li><button className="btn">В очереди</button></li>
            <li><button className="btn" >Завершено</button></li>
            </ul>
            <button className={`btn delete_all`} onClick={onDeleteAllButtonC1ick}>Удалить все</button>
            </div>
            <div className="list_blok">
              <ListOfFiles tasks={files} onDeletTask ={onDeletTask}/>
            
            </div>
          </div>
    )
}

export default Blok_Of_Compeleted_Actions;