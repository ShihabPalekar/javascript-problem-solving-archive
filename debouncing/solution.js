function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}



//Run immediately first, and then debounced with delay
function debounce(fn, delay) {
  let timer;
  let isFirstCall = true;

  return function (...args) {
    if (isFirstCall) {
      fn(...args);
      isFirstCall = false;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
      isFirstCall = true;
    }, delay);
  };
}

//In above example, suppose between first call and after the delay, there is no change, still setTimout will be executed once after the delay
//This can be avoided by using if-else
function debounce(fn, delay) {
  let timer;
  let isFirstCall = true;

  return function (...args) {
    if (isFirstCall) {
      fn(...args);
      isFirstCall = false;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        isFirstCall = true;
      }, delay);
    }
  };
}



//Combined function for both sceanrios
function debounce(fn, delay, immediate = false) {
  let timer;
  let isFirstCall = true;

  return function (...args) {
    if (immediate && isFirstCall) {
      fn(...args);
      isFirstCall = false;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        isFirstCall = true;
      }, delay);
    }
  };
}
