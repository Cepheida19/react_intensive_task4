import './App.css';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Loginpage from "./pages/Loginpage";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from './components/Layout';
import Description from './pages/Description';

function App() {
  return (
    <>

      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path=":id" element={<Description />} /> 
            <Route path="about" element={<Aboutpage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
