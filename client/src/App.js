import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from "./pages/books";
import Add from "./pages/add";
import Update from "./pages/update";
import Mainpage from "./pages/mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Books/>}/>
          <Route path="/add" element = {<Add/>}/>
          <Route path="/update/:id" element = {<Update/>}/>
          <Route path="/Mainpage" element = {<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
