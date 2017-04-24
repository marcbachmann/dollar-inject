module.exports = dollarInject

function dollarInject () {
  var args = []
  for (var i = 0; i < arguments.length; i++) args[i] = arguments[i]

  var method = args.splice(-1)[0]
  method.$inject = args
  return method
}
