import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Components
import { NewsIndex } from "./components/News/NewsIndex";
import { NewsDetails } from "./components/News/NewsDetails";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hackernews</title>
        <meta name="description" content="Hackernews" />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main>
              <NewsIndex />
            </Main>
          </Route>
          <Route
            path="/item/:id"
            render={() => {
              return (
                <Main>
                  <NewsDetails />
                </Main>
              );
            }}
          />
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
