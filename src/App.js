import "./App.css";
import HomePage from "./pages/homepage/hompage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componet";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={ <ShopPage />} />
        <Route path="/signin" element={ <SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
