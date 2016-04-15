# dollar-inject

```
$inject = require('dollar-inject')

sessionController = $inject 'session', '$http',
  (session, $http) ->
    ...
```

basically does

```
function foo (session) {}
foo.$inject = ['session']
```


# Why?

Because we're still using coffee-script

And the bracket notation is a bit annoying sometimes:
```
sessionController = ['session', '$http', (session, $http) ->
    ...
]
```
