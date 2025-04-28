for(var i = 0; i < 3; i++) {
  (function(j){
    setTimeout(() => {
      console.log(j)
    }, j*100)
  })(i)
}