module.exports = function buildError(message, source, meta) {
  var error = new Error(message)
  error.source = source
  if (meta) {
    Object.keys(meta).forEach(function(key) {
      error[key] = meta[key]
    })
  }
  return error
}
