const SelectedFile = () =>{
    

    return(
        <>
       <div className= 'content_blox'>
      
      <div className="content_img">
        <img src={content_img}/>
      </div>

      <div className="big_cont">
       
        <div className="litl_cont">
          <span className='field-name'>{name}</span>
          <span className='field-extension'>{file_extension}</span>
          <span className='field-size'>{file_size}</span>
          <button className='delite_task' onClick={()=> onDeletTask(id)}>Delete</button>
        </div>

        
        <div className="litl_cont">
          <span className="field-time">{time_start}</span>
          <div className="loading_bar">
            <div className="progress-bar" style={{ width: '40%' }}></div>
            
          </div>
          <span className="field-time">{time_end}</span>
        </div>
      </div>
    </div>
        </>
    )
}

export default SelectedFile;