import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/main-page/MainPage";
import Store from "./components/pages/store/Store";
//
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ESTABLISH_NAME" element={<Store />} />
        {/* <Route path="/ESTABLISH_NAME" element={<CheckOut />} /> */}
      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;

//8888 88888
