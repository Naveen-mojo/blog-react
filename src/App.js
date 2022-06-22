import './App.css';
import Footer from './component/Footer';
import HeaderController from './controller/HeaderController';
import Router from './routes';


function App() {

  return (
    <>
      <div className="site-wrapper header-1" style={{ transform: "none" }}>
        <HeaderController />
        <Router />
        <Footer />
      </div>

      
    </>
  );
}





export default App;
