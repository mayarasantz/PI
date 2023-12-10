import logo from './logo.svg';
import './App.css';
let nome = "inamaya";
let pessoas = [
  { "COD": "001", "NOME": "inae" },
  { "COD": "002", "NOME": "mayara" },
  { "COD": "003", "NOME": "zé", }]

function MyButton() {
  return (
    <button>Eu sou um botão</button>
  );
}
function MeuTitulo() {
  return (
    <h1>Projeto Integrador</h1>
  );
}
function MinhaTabela() {
  return (
    <table>
      <tr>
        <td>COD</td>
        <td>Nome</td>
      </tr>
      {pessoas.map((pessoa) =>
        <tr>
          <td>{pessoa.COD}X1</td>
          <td>{pessoa.NOME}</td>
        </tr>
      )}

    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuTitulo />
        <MinhaTabela />
        <p>
          Edit <code>src/App.js</code> and save to reload. {nome}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React


        </a>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
