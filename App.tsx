import React from 'react';

import Body from './components/Body'
import  { useState } from 'react';

import './App.css'

function App() {
  let [estado, useStado] = useState(1)

  function Change(){
    useStado(2)
  }

  return (
    <>
       {estado ===2&&
         <div className ="Header">
         <h1>Cacagram</h1>
     </div>
       }
      <div className ="Container">
        {estado === 1 &&
        <div className="centrado">
          <div className="login">
            <h1>Cacagram</h1>
            <p>Entrar</p>
            <button onClick={Change}>Login como invitado</button>
          </div>
          <div className="informacion">
              <p className="download">Descarga la app como una pwa</p>
                <div className="iconos">
                  <img title="windows" alt="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg/2321px-Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg.png"/>
                  <img title="linux" alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tux_Enhanced.svg/154px-Tux_Enhanced.svg.png"/>
                  <img title="mac" alt="img" src="https://cdn-icons-png.flaticon.com/512/2/2235.png"/>
                  <img title="bsd" alt="img" src="https://cdn.iconscout.com/icon/free/png-256/free-freebsd-3521438-2944882.png?f=webp&w=128"/>
                  <img title="android" alt="img" src="https://logodownload.org/wp-content/uploads/2015/05/android-logo-3-2.png"/>
                  <img title="ios" alt="img" src="https://logodownload.org/wp-content/uploads/2021/11/ios-logo-0.png"/>

                </div>
            </div>
        </div>
        }

        {estado ===2 && 
        <> 
      
    <Body/>
        </>}
          
      </div>
    </>
  );
}

export default App;
