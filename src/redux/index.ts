import { configureStore } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import reducers from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(logger as Middleware);
    }
});

export { store };
export * as ACTIONS from './actions';
export * as THUNKS from './thunk';
