import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Componentes Propios*/
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';

function App()
{
  return(
    <>
      <Header />
      <About />
      <Experience />
    </>
  );
}

export default App;
