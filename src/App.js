import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserState, {  } from "./contexts/user/UserState";
import Profile from './components/Profile'
import UserList from './components/UserList'

function App() {
  return (
    <UserState>
      <UserList />
    </UserState>
  );
}

export default App;
