import { useObservables } from "../../hooks";
import { stopwatchStore } from "../../store";

const WaitButton = () => {
  const [chatState] = useObservables(stopwatchStore);

  const onWaitTimer = () => {
    if (chatState.firstClick) {
      stopwatchStore.stopTimer();
    } else {
      stopwatchStore.onFirstClick();
    }
  };

  return (
    <button type='button' className='btn btn-warning' onClick={onWaitTimer}>
      Wait
    </button>
  );
};

export default WaitButton;
