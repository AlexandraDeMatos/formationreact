import {configureStore} from '@reduxjs/toolkit';
import ressourcesReducer, { addSingleMeme } from './slices/ressources';
import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common';

const dummyReducer = (state={}) => {
    return state;
};
export const store=configureStore({reducer: ressourcesReducer});

store.subscribe(() => {
    console.groupCollapsed('Store');
    console.trace('Il y a un changement :', store.getState());
    console.groupEnd();
});

store.dispatch(addSingleMeme(DummyMeme));