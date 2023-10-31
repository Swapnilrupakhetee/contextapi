
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextPorvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextPorvider>
      <div className="App">
      <h1>Hiii</h1>
      <Login/>
      <Profile/>
    </div>

    </UserContextPorvider>
    
  );
}

export default App;
