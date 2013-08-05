# Build Error

Wrap error messages into a javascript error object

# Installation

```bash
npm install -S build-error
```

# Usage

```javascript
var buildError = require('build-error')
var errorMessage = 'Something blew up'
var source = 'invalid data supplied'
// meta is an optional object that will be added to the error object
var meta = {
  foo: 'bar'
}
var error = buildError(errorMessage, source, meta)
console.dir(error)
```

