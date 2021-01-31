import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Feature from './Feature';
import Footer from './Footer';
import { GlobalStyle } from './globalStyles';
import Hero from './Hero';
import Products from './Products';
import {productData, productData2} from './Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero/>
      <Products heading='Choose your favorite' data={productData} />
      <Products heading='Sweet Treats for You' data={productData2} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
