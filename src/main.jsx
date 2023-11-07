import React from 'react'
import ReactDOM from 'react-dom/client'
import {Asside} from "./Asside.jsx";
import { Formulario } from './Formulario.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='principal'>
        <Asside />
        <Formulario></Formulario>
      </div>
  </React.StrictMode>,
)
