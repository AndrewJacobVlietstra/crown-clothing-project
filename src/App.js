import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import HatsPage from "./pages/HatsPage/HatsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PathNameContext from "./context/PathNameContext";
import { authentication, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = authentication.onAuthStateChanged(async userAuth => {
      // console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const userSnapshot = await getDoc(userRef).then(snapshot => snapshot.data());
        const user = {id: userAuth.uid, ...userSnapshot};
        setCurrentUser(user);
        // console.log(currentUser);

        navigate('/');
        setCurrentPath(window.location.pathname);
      }
      if (!userAuth) return setCurrentUser(userAuth);

    });

    return () => unsubscribeFromAuth();
  }, []);

  function handlePathChange() {
    return () => {
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
      }, 0);
    };
  }

  return (
    <>
      <PathNameContext.Provider
        value={{
          currentPath: currentPath,
          handlePathChange: handlePathChange,
        }}
      >
        <Header user={currentUser} />
        <div className="current-page">
          <Routes>
            <Route path="/" element={<HomePage user={currentUser} />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/signIn" element={<SignInSignUpPage setCurrentUser={setCurrentUser} />} />
            <Route path="/shop/hats" element={<HatsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </PathNameContext.Provider>
    </>
  );
}

export default App;
