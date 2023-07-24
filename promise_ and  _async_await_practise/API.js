function greetPerson(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}!`)
        } else {
          reject(new Error("Name not provided."))
        }
      }, 3000)
    })
  }
  
  const promise1 = greetPerson("Ram")
  const promise2 = greetPerson("Bobby")
  const promise3 = greetPerson("Cheery")
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("Promise.all results:", results)
    })
    .catch((error) => {
      console.error("Promise.all error:", error)
    });
  
  const promise4 = greetPerson("Nithish")
  const promise5 = greetPerson("Shmanth")
  const promise6 = greetPerson()
  
  Promise.any([promise4, promise5, promise6])
    .then((result) => {
      console.log("Promise.any result:", result)
    })
    .catch((errors) => {
      console.error("Promise.any errors:", errors)
    })

  const promise7 = greetPerson("Frank")
  const promise8 = greetPerson()
  
  Promise.allSettled([promise7, promise8])
    .then((results) => {
      console.log("Promise.allSettled results:", results)
    })
    .catch((errors) => {
        console.error("Promise.allSettled errors:", errors)
      })
  
  const promise9 = greetPerson("Grace")
  const promise10 = greetPerson("Henry")
  
  Promise.race([promise9, promise10])
    .then((result) => {
      console.log("Promise.race result:", result);
    })
    .catch((error) => {
      console.error("Promise.race error:", error.message);
    })