import LandingPage from "./page/dashboard/component/LandingPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AppRoute() {
  return (
    <div className="App">
      <LandingPage />
      <ToastContainer />
    </div>
  );
}

export default AppRoute;
