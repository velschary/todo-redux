import { rootReducer } from '../reducer/rooteReducer'
import {createStore} from 'redux'
export const store = createStore(rootReducer)