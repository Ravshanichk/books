import BookPage from './components/BookPage/BookPage'
import Header from './components/header/Header';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
       <Route path='/profile/:userId?' render={() =><C/>}/>
       <Route path='/' render={() =><BookPage/>}/>
   </div>
  );
}

export default App;
