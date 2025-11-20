async function doSomething(hasProblem) {
    return new Promise((resolve, reject) => { //ส่งกลับเป็น Promise
      setTimeout( //ใช้ setTimeout() เพื่อmockการทำงานที่ใช้เวลา 5 sec
        () => (hasProblem ? reject("Fail Working") : resolve("Fully Complete")),
        5000
      )
    })
  }

  console.log("starting...")
  doSomething(true)
    .then((workingStatus) => { //ใช้ .then() success -> แต่ในกรณีนี้ไม่รันเพราะมี error
      console.log(workingStatus)
      console.log("ending...")
    })
    .catch((errorMessage) => { //ใช้ .catch() doSomethingมันเกิดfail -> จะพิมพ์ "Fail Working"
      console.log(errorMessage)
    })
   