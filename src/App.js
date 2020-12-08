import "./App.css";
import { connect } from "react-redux";
import { testLocalToken } from "./store/user/authReducer";
import { useEffect } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Settings from "./screens/Settings";
import Sprite from "./components/Sprite/Sprite";

function App({ screen, testLocalToken }) {
  useEffect(() => {
    testLocalToken();
  }, []);

  console.log(process.env);
  const router = (screen) => {
    switch (screen) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "dashboard":
        return <Dashboard />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {router(screen)}
      <Sprite />
    </div>
  );
}

let mapStateToProps = (state) => ({ screen: state.router.screen });
export default connect(mapStateToProps, { testLocalToken })(App);
