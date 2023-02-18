import { Link, Routes, Route } from "react-router-dom";

function Header({userCheckData, signOut}) {
    return (
        <header className="header">
            <div className="header__logo"></div>
            
                <Routes>
                    <Route path="/main" element={
                        <div className="header__profile-data">
                            <p className="header__profile-email">{userCheckData.email}</p>
                            <Link to='/sign-in' className="header__logout" onClick={signOut}>Выйти</Link>
                        </div>   
                    }/>
                    <Route path="/sign-in" element={
                        <div className="header__profile-data">
                            <Link to='/sign-up' className="header__logout">Регистрация</Link>
                        </div>
                    }/>
                    <Route path="/sign-up" element={
                        <Link to='/sign-in' className="header__logout">Войти</Link>
                    }/>
                </Routes>
                
        </header>
    )
}

export default Header;