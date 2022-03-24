
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Mainview from "./views/Mainview";
import Detailedview from "./views/Detailedview"


function App() {

 


  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element = { <Mainview/> }> </Route>
          <Route exact path="/all" element = { <Mainview/> }> </Route>
          <Route exact path="/events" element = { <Mainview/> }> </Route>
          <Route exact path="/lifestyle" element = { <Mainview/> }> </Route>
          <Route exact path="/benefits" element = { <Mainview/> }> </Route>
          <Route exact path="/blogs/:blogname/:blogid" element = { <Detailedview/> }> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
