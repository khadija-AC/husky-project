;(function (exports) {
  function greet(name) {
    const options = {



      second: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
      day: 'long',
      month: 'long',
      
    }

    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-US', options)
    return `Hello, ${name}! Today is ${formattedDate}.`
  }

  exports.greet = greet
})(this)
