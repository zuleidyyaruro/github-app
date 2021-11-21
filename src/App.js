import {BrowserRouter, Routes, Route} from "react-router-dom";
import Followers from "./views/Followers";
import Followings from "./views/Followings";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:login" element={<Home/>}/>
        <Route path="/:user/followers" element={<Followers/>}/>
        <Route path="/:user/followings" element={<Followings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
