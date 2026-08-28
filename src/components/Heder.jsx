import logo from '/src/assets/main_logo.png';
import icon from '/src/assets/ct.svg';

const Header = () => {
  const isLoggedIn = false; // Заглушка

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Лого" />
      </div>
      <nav className="nav_bar">
        <p>Конвертировать</p>
        <div className="nav_ico">
          <img src={icon} alt="Иконка" />
        </div>
      </nav>

      {!isLoggedIn ? (
        <>
          <div className="reg">Зарегистрироваться</div>
          <div className="ent">Войти</div>
        </>
      ) : (
        <>
          <div className="reg">Облако</div>
          <div className="ent">Личный кабинет</div>
        </>
      )}
    </header>
  );
};

export default Header;