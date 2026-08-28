
const Droper  = () =>{
   

    return(
        <>
        <h2>Конвертер файлов</h2>
          <p>Сконвертируйте ваши файлы в любой формат</p>
          <div className="droper">
            <div className="droper_ico">
              <img src="/src/assets/file.svg" alt="Файл" />
            </div>
            <label htmlFor="file-upload" className="custom-upload">Выберите файл</label>
            <input type="file" name="userfile" className="convert" id="file-upload" />
          </div>
          </>
    )
}

export default Droper;