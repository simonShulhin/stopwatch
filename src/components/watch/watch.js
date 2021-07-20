import { useEffect } from 'react';
import { stopwatchStore } from '../../store';
import { useObservables } from '../../hooks';

const Watch = () => {
  const [chatState] = useObservables(stopwatchStore);

  useEffect(() => {
    let timerInterval = null;
    if (chatState.run) {
      timerInterval = setInterval(() => {
        stopwatchStore.changeTimer();
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [chatState.run]);

  const hours = (~~(chatState.value / 3600)).addZero();
  const minutes = (~~((chatState.value / 60) % 60)).addZero();
  const seconds = (chatState.value % 60).addZero();

  return <h2>{`${hours}:${minutes}:${seconds}`}</h2>;
};

export default Watch;
