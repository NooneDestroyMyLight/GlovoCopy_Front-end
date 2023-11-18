import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/main-page/MainPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  );
}

export default App;

//8888 88888
