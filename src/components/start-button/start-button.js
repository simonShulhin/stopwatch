import { stopwatchStore } from '../../store';

const StartButton = () => {
  return (
    <button type='button' className='btn btn-success' onClick={() => stopwatchStore.runTimer()}>
      Start
    </button>
  );
};

export default StartButton;
