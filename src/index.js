import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //storeを作るために必要なcreateStoreをimport
import { Provider } from 'react-redux'; //Providerをimport。storeがどこからでも (子コンポーネントからでも)アクセスできるように設定
import reducer from './reducers'; //reducerをcreateStoreの引数にするためimport
import './index.css';
import App from './components/App'; //App.jsのディレクトリを移動したのでリンク先の変更
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer) //createStoreでstoreを作成し、作成したReducerを登録

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
