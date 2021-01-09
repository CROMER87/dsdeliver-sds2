import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routes';


function App() {
  return (
    <>
     <Routes />
     <ToastContainer
     position="top-right"
     autoClose={1000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     />
     </>
    
  );
}

export default App;
