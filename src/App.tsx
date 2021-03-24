import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import Home from './pages/Home';
import Orders from './pages/Orders';
import "./styles/global.css";


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
