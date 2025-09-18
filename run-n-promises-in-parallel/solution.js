async function promisePool(tasks, n) {
  let i = 0;

  async function worker() {
    if (i >= tasks.length) return; // no tasks left
    const task = tasks[i++]; // pick next task
    await task(); // run it
    await worker(); // run next when done
  }

  // Start n workers
  await Promise.all(Array.from({ length: n }, worker));
}



//Walkthrough
// 1. n=2, so start 2 workers.

// 2. Worker1 → Task1 (1s)
// Worker2 → Task2 (0.5s)

// 3. Task2 finishes first → Worker2 picks Task3 (0.3s).

// 4. Task3 finishes → Worker2 picks Task4 (0.4s).

// 5. Finally Task1 finishes, then Task4 finishes → All done.