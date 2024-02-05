function createCounter() {
    let count = 0;
  
    const increment = () => {
      count++;
      console.log('Current count:', count);
    };
  
    // Here, we forgot to remove the reference to increment, creating a closure
    // around the count variable, which persists after createCounter() finishes
    return increment;
  }
  
  // Create a counter and start using it
  const counter = createCounter();
  
  // Call the counter a few times
  counter(); // Current count: 1
  counter(); // Current count: 2
  
  // Now, let's say we no longer need the counter,
  // but we forgot to remove the reference to counter
  