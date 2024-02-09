import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Homepage from "./components/HomePage";

import DetailsMeteo from "./components/DetailsMeteo";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route path="/meteo-details/:meteoId" element={<DetailsMeteo />} />
        </Routes>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
