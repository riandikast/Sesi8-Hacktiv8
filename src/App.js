
import './App.css';
import Body from './component/Body';
import 'jquery/dist/jquery.min.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <header/>
      <div className="container">
        <Body></Body>
      </div>
      <footer/>
    </>
   
  );
}

export default App;
