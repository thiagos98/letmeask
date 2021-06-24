import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
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