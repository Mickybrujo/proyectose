import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import thunk from 'redux-thunk';
import Home from 'components/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = createStore(reducers, undefined, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
