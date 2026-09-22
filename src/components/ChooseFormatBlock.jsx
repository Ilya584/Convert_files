
const ChooseFormatBlock = (props) => {
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

  


  return(
    <div className="choose_format">
     
        <div className="head_cf">
           <div className="content_img">
            <img src="" alt="Пикча" />
          </div>
          <div className="content_block">
            <div className="content_up">
              <h1>Название.формат</h1>
            </div>
            <div className="content_down">
              <h3>Размер файла и прочее</h3>
            </div>
          </div> 
          <div className="count">
            <h3>1/x</h3>
          </div>
          </div>
          <hr id = "horizontal_line"></hr>
       
        <div className="body_cf">
          
      {text_format.slice(0, 8).map((item, index) => (
        <div className="format_exemple" key={index}>{item.ext || "Пусто"}</div>
      ))}
        </div>
        <div className="futer_cf">
          <button className="more">Другие форматы</button>
        </div>
    </div>


    )
}

export default ChooseFormatBlock; 