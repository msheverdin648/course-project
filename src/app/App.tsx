import React, { Suspense } from 'react'
import './styles/index.scss'
import { Routes, Route, Link} from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'




const App = () => {

  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"} >О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPage/>} />
            <Route path={'/'} element={<MainPage/>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;