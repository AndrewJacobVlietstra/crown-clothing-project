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
import {
  authentication,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import { setUserAction } from "./redux/user/User.actions";
import { handlePathChangeAction } from "./redux/path/path.actions";
import { connect } from "react-redux";

function App({ setUser, setPath }) {
  const navigate = useNavigate();
  let unsubscribeFromAuth = null;

  // Any time auth state changes send a dispatch to update currentUser in the store
  useEffect(() => {
    unsubscribeFromAuth = authentication.onAuthStateChanged(
      async (userAuth) => {
        // console.log(userAuth);
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          const userSnapshot = await getDoc(userRef).then((snapshot) =>
            snapshot.data()
          );
          const user = { id: userAuth.uid, ...userSnapshot };
          setUser(user);

          // setCurrentUser(user);
          // console.log(currentUser);

          if (window.location.pathname === "/signIn") {
            navigate("/");
          }
        }
        if (!userAuth) return setUser(userAuth);
      }
    );

    return () => unsubscribeFromAuth();
  }, []);

  // Any time the window path changes, send a dispatch to the reducer to update current path in the store
  useEffect(() => {
    setPath();
  }, [window.location.pathname]);

  return (
    <>
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
    </>
  );
}

// This function makes setUser a prop of this component's props
// setUser will be a function that returns a dispatch method with setUser action passed in, as well as user data as the payload
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
  setPath: () => dispatch(handlePathChangeAction()),
});

// Connect returns your component but connected to the redux store, and you can pass in functions to
// map state of the store to the props of this component if it needs access to a piece of state,
// or map a dispatch in props if you need to update the state within the store from this component
export default connect(null, mapDispatchToProps)(App);
