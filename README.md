# JSON.read

### Include

```javascript
<script src="json_read.js"></script>
```
### How to use

* for example you have such json:

```javascript
var json = {
	"a": "NaN",
	"b": "Infinity",
	"c": "-Infinity",
	"d": "true",
	"e": "false",
	"f": {
		"numbers": ["123", "456", 789, "string"]
	},
	"g": "null",
	"h": "123",
	"i": "other string"
}
```
* after execute this:

```javascript
JSON.read(json);
```
or
```javascript
JSON.read(JSON.stringify(json));
```

* return this json:
```javascript
var json = {
	"a": NaN,
	"b": Infinity,
	"c": -Infinity,
	"d": true,
	"e": false,
	"f": {
		"numbers": [123, 456, 789, "string"]
	},
	"g": null,
	"h": 123,
	"i": "other string"
}
```

All types of strings values in object become relevant types.
Supported objects of any nesting. 

### !Note
return 'false' if argument of function not object or not string.

