import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "../../pages/Home";
import EmployeesList from "../../pages/EmployeesList";
import { Provider } from "react-redux";
import { store } from "../../services/redux/reducer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employee-list" element={<EmployeesList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
