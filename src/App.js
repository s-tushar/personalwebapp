import React from 'react';
import './App.css'; 
import AppRouter from './router/router';
//import Helmet from 'react-helmet';


function App() {

  
  return (
    <div className="App">
      {/* <Helmet>
            <title>{title ? title : defaultTitle}</title>
      </Helmet> */}

     <AppRouter/>
    </div>
  );
}

export default App;
