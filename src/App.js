
import "./app.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./home"
import BookNow from "./booknow"




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booknow" element={<BookNow />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
