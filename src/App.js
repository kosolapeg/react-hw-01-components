import './components/Profile/Profile';
import Profile from './components/Profile/';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics />
    </>
  );
}

export default App;
