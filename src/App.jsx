import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path = "/" element = {<><Movie/> </>} />
            <Route path= "WatchList" element = {<WatchList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
