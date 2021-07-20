import { stopwatchStore } from '../../store';

const ResetButton = () => {
  return (
    <button type='button' className='btn btn-danger' onClick={() => stopwatchStore.resetTimer()}>
      Reset
    </button>
  );
};

export default ResetButton;
