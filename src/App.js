
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Body></Body>
      </div>
      <Footer></Footer>
    </>
   
  );
}

export default App;
