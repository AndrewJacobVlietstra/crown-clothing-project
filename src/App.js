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
import { setUserAction } from "./redux/user/User.actions";
import { connect } from "react-redux";

function App({ setUser }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = useNavigate();

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = authentication.onAuthStateChanged(async userAuth => {
      // console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const userSnapshot = await getDoc(userRef).then(snapshot => snapshot.data());
        const user = {id: userAuth.uid, ...userSnapshot};
        setUser(user);

        // setCurrentUser(user);
        // console.log(currentUser);

        if (window.location.pathname === '/signIn') {
          navigate('/');
          setCurrentPath(window.location.pathname);
        }
      }
      if (!userAuth) return setUser(userAuth);

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
        <Header />
        <div className="current-page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/signIn" element={<SignInSignUpPage />} />
            <Route path="/shop/hats" element={<HatsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </PathNameContext.Provider>
    </>
  );
}

// This function makes setUser a prop of this component's props
// setUser will be a function that returns a dispatch method with setUser action passed in, as well as user data as the payload
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUserAction(user)),
});

// Connect returns your component but connected to the redux store, and you can pass in functions to
// map state of the store to the props of this component if it needs access to a piece of state, 
// or map a dispatch in props if you need to update the state within the store from this component
export default connect(null, mapDispatchToProps)(App);
