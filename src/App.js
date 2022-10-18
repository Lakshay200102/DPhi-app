import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChallengeDetailsPage from "./pages/ChallengeDetailsPage";
import ViewChallenge from "./pages/ViewChallenge";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/createchallenge">
          <ChallengeDetailsPage />
        </Route>
        <Route path="/editchallenge/:challengeid">
          <ChallengeDetailsPage />
        </Route>
        <Route path="/viewchallenge/:challengeid">
          <ViewChallenge />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
