import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./slices/ressources";
import currentReducer from "./slices/current";
import { initialRessourcesLoad } from "./asyncCaller/asyncRessources";

export const store = configureStore({
  reducer: {
    ressources: ressourcesReducer,
    current: currentReducer,
  },
});
store.subscribe(() => {
  console.groupCollapsed("changement store");
  console.trace("y a un changement:", store.getState());
  console.groupEnd();
});


store.dispatch(initialRessourcesLoad())

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch