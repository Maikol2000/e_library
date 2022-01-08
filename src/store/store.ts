import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//reducer
import { homeLeaderReducer } from "../container/leaderComponent/homeLeader/action/reducer";
import { authReduser } from "../container/share/auth/login/module/reducer";

const rootReducer = combineReducers({
  authReduser,
  homeLeaderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReduser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
