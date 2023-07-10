// import { applyMiddleware, createStore } from "redux";
// import reducers from './reducer/reducer';
// import thunk from 'redux-thunk';

// export const store=createStore(reducers,{},applyMiddleware(thunk));

// import { createRequestMiddleware } from "redux-requests";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import reducer from "./reducers/reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

// function configureStore(middlewares = [], initialState) {
//   const composeEnhancer =
//     process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

//   const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancer(
//       applyMiddleware(thunk, createRequestMiddleware(), ...middlewares)

//     )
//   );
//   return {
//     store,
//     Provider,
//   };
// }

// export default configureStore;
