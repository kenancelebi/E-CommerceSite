import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Componets/Main/Main";
import FilteredProducts from "./Componets/FilteredProducts/FilteredProducts";
import SingleProduct from "./Componets/FilteredProducts/SingleProduct";
import Login from "./Componets/Login/Login";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
