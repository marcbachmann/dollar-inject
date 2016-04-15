module.exports = dollarInject

function dollarInject () {
  var method = [].splice.call(arguments, -1)[0]
  method.$inject = arguments
  return method
}
