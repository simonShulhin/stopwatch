import { useLayoutEffect, useState } from 'react';

export const useObservables = (store) => {
  const [chatState, setChatState] = useState(store.initialState);
  useLayoutEffect(() => {
    const subs = store.subscribe(setChatState);
    store.init();

    return () => subs.unsubscribe();
  }, [store]);
  return [chatState];
};