import './App.css';
import { ResetButton, StartButton, WaitButton, Watch } from './components';

function App() {
  return (
    <>
      <header className='header'>
        <h1>Stopwatch</h1>
      </header>
      <main>
        <Watch />
        <div className='btn-group'>
          <ResetButton />
          <WaitButton />
          <StartButton />
        </div>
      </main>
    </>
  );
}

export default App;
