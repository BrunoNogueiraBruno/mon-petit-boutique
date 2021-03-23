import React from 'react';
import { ProductsProvider } from './contexts/ProductsContext';
import Home from './pages/Home';
import "./styles/global.css";

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <Home />
      </div>
    </ProductsProvider>
  );
}

export default App;
