import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import thunk from 'redux-thunk';
import Home from 'components/Home'


const store = createStore(reducers, undefined, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Home></Home>
      </Provider>

    </div>
  );
}

export default App;
