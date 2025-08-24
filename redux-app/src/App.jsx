import './App.css'
import Todoinput from './Components/Todoinput.jsx';
import List from './Components/List.jsx';
import {store} from './App/Store.js';
import {Provider} from 'react-redux';
function App() {
  

  return (
    <Provider store={store}>
    <Todoinput/>
    <List/>
    </Provider>
    )
}

export default App
