import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Demo from "./pages/Demo/Demo";
import Notes from "./pages/Notes/Notes";
import {
  DEMO_PAGE_ROUTE,
  NOTES_ROUTE,
  SIGNIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from "./routes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={DEMO_PAGE_ROUTE} component={Demo} />
          <Route path={SIGNIN_PAGE_ROUTE} component={SignIn} />
          <Route path={SIGNUP_PAGE_ROUTE} component={SignUp} />
          <Route path={NOTES_ROUTE} component={Notes} />
          <Route exact path="/">
            <Redirect to={DEMO_PAGE_ROUTE} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
