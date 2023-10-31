
import './App.css';
import UserContextPorvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextPorvider>
      <div className="App">
      <h1>Hiii</h1>
    </div>

    </UserContextPorvider>
    
  );
}

export default App;
