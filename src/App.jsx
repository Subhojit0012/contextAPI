import './App.css';
import LoginPage from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div>User Conetext</div>
      <LoginPage />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
