import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './componentsReactRedux/CakeContainer';
import HooksCakeContainer from './componentsReactRedux/HooksCakeContainer';
import NewCakeContainer from './componentsReactRedux/NewCakeContainer';
import ItemContainer from './componentsReactRedux/ItemContainer';

function App() {
  return (
     <Provider store={store}>
    <div className="App">
      <ItemContainer/>
      <ItemContainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <NewCakeContainer/>
    </div>
    // </Provider>
  );
}

export default App;
