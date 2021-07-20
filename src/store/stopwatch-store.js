import { Subject } from 'rxjs';

const subject = new Subject();
const initialState = {
  value: 0,
  firstClick: false,
  run: false,
};

let state = initialState;

const stopwatchStore = {
  init: () => {
    state = { ...state };
    subject.next(state);
  },
  subscribe: (setState) => subject.subscribe(setState),

  runTimer: () => {
    state = {
      ...state,
      run: true,
    };
    subject.next(state);
  },
  stopTimer: () => {
    state = {
      ...state,
      run: false,
    };
    subject.next(state);
  },
  resetTimer: () => {
    state = {
      ...state,
      value: 0,
      run: true,
    };
    subject.next(state);
  },
  changeTimer: () => {
    state = {
      ...state,
      value: state.value + 1,
    };
    subject.next(state);
  },
  onFirstClick: () => {
    state = {
      ...state,
      firstClick: true,
    };
    subject.next(state);

    window.setTimeout(() => {
      state = {
        ...state,
        firstClick: false,
      };
      subject.next(state);
    }, 300);
  },
  initialState,
};

export default stopwatchStore;
