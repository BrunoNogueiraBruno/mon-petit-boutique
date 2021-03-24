import React from 'react';
import { GlobalProvider } from './contexts/GlobalContext';
import Home from './pages/Home';
import "./styles/global.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
