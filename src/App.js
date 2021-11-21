import {BrowserRouter, Routes, Route} from "react-router-dom";
import Followers from "./views/Followers";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:login" element={<Home/>}/>
        <Route path="/:user/followers" element={<Followers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
