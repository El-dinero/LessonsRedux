import React from "react";
import { BrowserRouter as Routs, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Components
import Header from "./Components/Layouts/Header";
import Home from "./Components/Home/Home";
import ERORR from "./Components/ERORR/ERORR";
import Footer from "./Components/Layouts/Footer";

function App() {
  return (
    <Provider store={store}>
      <Routs>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/*" exact render={() => <ERORR />} />
          </Switch>
        </main>
        <Footer />
      </Routs>
    </Provider>
  );
}

export default App;
