import logo from './logo.svg';
import './App.css';
import UpdateTweets from './components/UpdateTweets/UpdateTweets';
import NewTweet from './components/NewTweet/NewTweet';

function App() {
  return (
    <>
      <NewTweet />
      <UpdateTweets />
    </>
  );
}

export default App;
