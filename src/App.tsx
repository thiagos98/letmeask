import { Home } from './pages/Home'

function App() {
  return (
    <Home />
  );
}

export default App;

/*
  Estado é uma informação mantida por um componente de dentro do React.
  Sempre que tivermos uma informação que será alterada pelo uso do usuário
  (usuário clicou no botão, a informação terá um novo valor, sempre será
    armazenado no estado ), ou seja, sempre que uma informação não permanece
  com o mesmo valor durante todo o uso da aplicação, aquilo é um estado.
*/