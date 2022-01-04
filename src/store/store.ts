import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//reducer
import { homeLeaderReducer } from "../components/leaderComponent/homeLeader/action/reducer";

const rootReducer = combineReducers({
  homeLeaderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>

export { store, persistor };
