import { createStore, applyMiddleware, compose, Middleware, Reducer, Store } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { RootStore } from "../reducers";
import rootReducer from "../reducers";

/**
 * Configures our redux store
 * @param  {Object} initialState Initial starting state
 * @return {Redux Store} redux Store object
 */
function configureStore(
    initialState,
    reducer: Reducer<RootStore>,
    env = "dev",
): Store<RootStore> {
    //Use thunk middleware for our async reducers
    const middleware: Array<Middleware> = [thunk];

    let enhancer;

    if (process.env.NODE_ENV === "development") {
        const logger = createLogger();

        // middleware.push(logger);

        enhancer = compose(
            applyMiddleware(...middleware),
            // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
            // @ts-ignore
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        );
    } else {
        enhancer = applyMiddleware(...middleware);
    }

    return createStore(reducer, initialState, enhancer);
}

export default configureStore(undefined, rootReducer);