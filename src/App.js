import './App.css';
import FooterController from './controller/FooterController';
import HeaderController from './controller/HeaderController';
import Router from './routes';


function App() {

  return (
    <>
      <div className="site-wrapper header-1" style={{ transform: "none" }}>
        <HeaderController />
        <Router />
        <FooterController />
      </div>

      
    </>
  );
}





export default App;
