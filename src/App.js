import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import { TodoComp } from './todo-array/component/todocomp';
import { store } from './todo-array/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoComp />
      </Provider>
      
    </div>
  );
}

export default App;
