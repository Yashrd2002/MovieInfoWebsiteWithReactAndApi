
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="movie/:id" element={<Detail/>}/>
          <Route path="*" element={<h2>Error</h2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;