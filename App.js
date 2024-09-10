import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Galadima Printing Press</h1>
        <nav className="menu">
          <ul className="left-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
          <ul className="right-menu">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="product-list">
          <h2>Our Products</h2>
          <div className="products">
            <div className="product">
              <h3>A4 Paper</h3>
              <p>Description of A4 Paper</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>A3 Paper</h3>
              <p>Description of A3 Paper</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Art Card</h3>
              <p>Description of Art Card</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Ordinary Card</h3>
              <p>Description of Ordinary Card</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Silver Card</h3>
              <p>Description of Silver Card</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Silver Paper</h3>
              <p>Description of Silver Paper</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Machine Printers</h3>
              <p>Description of Machine Printers</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Laminating Machine</h3>
              <p>Description of Laminating Machine</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>D.I Machine</h3>
              <p>Description of D.I Machine</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <h3>Others</h3>
              <p>Description of Other Products</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>

        <section className="vision">
          <div className="vision-box">
            <h2>Our Vision</h2>
            <p>To be the leading provider of high-quality printing solutions and office supplies, known for our exceptional service and commitment to customer satisfaction.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GaladimaPrint. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
