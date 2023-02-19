import React, { Suspense } from 'react'
import './styles/index.scss'
import { Routes, Route, Link} from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'


const App = () => {

  const {theme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App;