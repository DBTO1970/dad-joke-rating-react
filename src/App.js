import styles from './App.style.js';
import JokesList from './components/jokes/JokesList.js';

function App() {
  return (
    <div style={styles.app}>
      <JokesList />
    </div>
  );
}

export default App;