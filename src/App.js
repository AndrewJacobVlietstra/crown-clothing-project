import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import HatsPage from "./pages/HatsPage/HatsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import PathNameContext from "./context/PathNameContext";
import { authentication } from './firebase/firebase.utils';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = authentication.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    })

    return () => {
      unsubscribeFromAuth();
    } 
  }, []);

  function handlePathChange() {
    return () => {
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
      }, 0);
    };
  };

  return (
    <>
      <PathNameContext.Provider
        value={{
          currentPath: currentPath,
          handlePathChange: handlePathChange,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/signIn" element={<SignInSignUpPage />} />
          <Route path="/shop/hats" element={<HatsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PathNameContext.Provider>
    </>
  );
}

export default App;
