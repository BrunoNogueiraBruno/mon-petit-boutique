import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import Home from './pages/Home';
import Orders from './pages/Orders';
import "./styles/global.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/orders" component={Orders} />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
