import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import OProjeto from './assets/Pages/OProjeto'
import OQueFazemos from './assets/Pages/OQueFazemos'
import ComoFazemos from './assets/Pages/ComoFazemos'
import Crescemos from './assets/Pages/Crescemos'
import OndeEstamos from './assets/Pages/OndeEstamos'
import Dicas from './assets/Pages/Dicas'
import ErrorPage from './assets/Pages/ErrorPage'
import Creditos from './assets/Pages/Creditos'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<OProjeto/>}/>
          <Route path='/OQueFazemos' element={<OQueFazemos/>}/>
          <Route path='/ComoFazemos' element={<ComoFazemos/>}/>
          <Route path='/Crescemos' element={<Crescemos/>}/>
          <Route path='/OndeEstamos' element={<OndeEstamos/>}/>
          <Route path='/Dicas' element={<Dicas/>}/>
          <Route path='/Creditos' element={<Creditos/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
