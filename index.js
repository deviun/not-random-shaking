const firstList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const threads = {
  current: [...firstList],
  nextA: [],
  nextB: [],
  lastNextThread: true, // true = A, false = B
};

const line = [];

const print = () => {
  const [currentItem] = threads.current;
  
  // print
  // console.log(threads);
  line.push(currentItem);
  console.log(line);

  // move to next thread
  threads[threads.lastNextThread ? 'nextA' : 'nextB'].push(currentItem);

  // shift current thread
  threads.current.shift();

  if (!threads.current.length) {
    // shift all threads
    threads.lastNextThread = true;
    threads.current = threads.nextA;
    threads.nextA = threads.nextB;
    threads.nextB = [];
  } else {
    // switch next thread
    threads.lastNextThread = !threads.lastNextThread;
  }

  setTimeout(print, 200);
};

print();
