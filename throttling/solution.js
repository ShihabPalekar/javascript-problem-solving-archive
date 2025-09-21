// 1
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
}



// 2
function throttle(fn, delay) {
    let lastCall = 0;      
    let timer = null;      
    let lastArgs;          
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCall >= delay) {
        fn(...args);        // run immediately if enough time passed
        lastCall = now;     
      } else {
        lastArgs = args;    // remember the most recent args
  
        if (!timer) {
          const remaining = delay - (now - lastCall);
          timer = setTimeout(() => {
            fn(...lastArgs);   // run again after the remaining time
            lastCall = Date.now();
            timer = null;
          }, remaining);
        }
      }
    };
  }

  
/*
    Here,
    If delay = 1000ms,
    1. First call is done immediately.
    2. Then if between first call and 1000ms, if i trigger it again 2-3 or any n number of times, after 1000ms it will call again once, and thats it.
    3. If between first acll and 1000ms, if i do not trigger it again, nothing happens after 1000ms.


    Case 1: You trigger multiple times within the 1000ms window
    > 0ms → first trigger → runs immediately.
    > 100ms, 200ms, 300ms... → these don’t run right away, but the latest arguments are remembered.
    > At 1000ms (i.e., when the wait is over) → one extra run happens with the latest arguments.

    Case 2: You trigger only once, then stay quiet
    > 0ms → first trigger → runs immediately.
    > No more calls → nothing happens at 1000ms.
*/