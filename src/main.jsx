import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Nav from './component/nav/nav';
import { Provider } from 'react-redux';
import store from './component/store';
import Custome from './component/customization/Custome';
import BodyColorChanger from './component/BodyColorChanger';

const basename = import.meta.env.MODE === 'production' ? '/Nihongo-V2/' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <BodyColorChanger />
        <Custome />
        <Nav />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);