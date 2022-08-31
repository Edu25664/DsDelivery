import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Navbar from "./NavBar";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Navbar/>
      <Routes></Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
