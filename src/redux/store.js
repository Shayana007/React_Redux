import { createStore , applyMiddleware} from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from "redux-logger";
import cakereducer from "./cakes/cakeReducer";

const store =createStore(cakereducer,applyMiddleware(logger))
export default store