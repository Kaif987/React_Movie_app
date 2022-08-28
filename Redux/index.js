import formReducer from "./formReducer" 
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    form: formReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() =>{
    console.log(store.getState())
})
export default store