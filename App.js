import './App.css';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Basketpage from "./pages/Basketpage";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from './components/Layout';
import Description from './pages/Description';
import { StateContext, state } from './context';
import { useState } from 'react';

function App() {
  const [context, setContext] = useState(state);
  return (
    <>
      <div>
        <StateContext.Provider value={context}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path=":id" element={<Description />} /> 
            <Route path="about" element={<Aboutpage />} />
            <Route path="basket" element={<Basketpage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
        </StateContext.Provider>
      </div>
    </>
  );
}
export default App;
