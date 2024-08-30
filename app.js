import React, { useState } from 'react';
import './app.css'
import senhas from './parametros.js'
import './tela.jsx'


const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    let validaLogin = false;
    for (let i in senhas) {
      if (usuario === senhas[i].login && senha === senhas[i].pass) {
        validaLogin = true;
        break;
      }

    }

    if (validaLogin) {
      window.location.href = "http://172.25.26.73:3002"
    } else {
      alert('Usuário e senha incorretos.');
    }
  };


  return (
    <main>

        {/* área do H1 */}

    <div className="DivH1" >
      <h1>Login</h1>
      </div>
        {/* área do H1 */}


        {/* área do input usuario */}
        <div className="DivEmail" >
      <input
        className="InputEmail"
        id="usuario"
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      </div>
      {/* área do input usuario */}


      {/* área do input senha */}

      <div className="DivSenha" >
      <input
        className="InputSenha"
        type="password"
        placeholder="Senha"
        id="senha"       
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
     </div>
     {/* área do input senha */}


      {/* área do botão */}
      <div>
      <button
      type="button"
       className="button"
       onClick={logar}>
        Logar
      </button>
      </div>
      {/* área do botão */}
      
      </main>
  );
};

export default Login;