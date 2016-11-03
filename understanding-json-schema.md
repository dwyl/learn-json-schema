### JSON SCHEMA

**JSON schema is a powerful tool for validating the structure of JSON data.**

_But what does it actually mean in layman's term?_

What is JSON?
* Javascript Object Notation
* store information.
* Uses following data structures
    * Object, Array, Number, String, Boolean, Null  

```js
{  
	“key1”: “value1”,
	“key2”: “value2”,
}
```

#### What is a JSON schema?
* used to define the structure of the JSON Object.
* useful tool for defining what type of data structure you want to return.

**E.G.**  
When a user submits a form, you want to validate all the information they may have entered.

Expected Object:
```js
{
	“type”: “object”,
	“properties”: {
		“first name”: { “type”: “string” },
		“first name”: { “type”: “string” },
		“age” : { “type”:  “number” }
	}
}
```
Now if the submit a the following object:  
```js
{
	“first name”:”Mickey”,
	“last name”: “Mouse”
}
```
It would fail the validation that we have put in place. But, the following object:  
```js
{
	“first name”:”Mickey”,
	“last name”: “Mouse”,
	“age”: 100
}
```
It would pass the validation.

**There we have our first JSON Schema for validation purposes! :smile:**


-------------------------------------------------

#### How to Restrict to specific Types

```js
"type": "string"
"type": "number"
"type": "object"
"type": "array"
"type": "boolean"
"type": "null"
+ many more to be added here...
```

```js
"type": "string",
"minLength": 2,
"maxLength": 5
```

```js
"type": "string",
"pattern": "^sohil$"
```

```js
"type": "number",
"multipleOf": "10",
"minimum": 0,
"maximum": 100,
"exclusiveMaximum": true
```

_Built in formats_
- "date-time"
- "email"
- "hostname"
- "ipv4"
- "ipv6"
- "uri"

You can also allow for multiple types using the following method"

```js
{ "type": ["number", "string"] }

```
Both of the options below would be valid  
`42` :heavy_check_mark:  
`"This is a String"` :heavy_check_mark:  

#### How to declare a JSON schema


```js
{ "$schema": "http://json-schema.org/schema" }
```

This allows you to tell the difference between a JSON schema and just some JSON (**good practice to use this declaration**)

```js
{ "id": "http://yourdomainname/myschema.json" }
```
Unique identifier for your schema.

**Question:** Can you only have one schema per app? ( how would be define the id's for multiple schemas in an app, can we just link to the same domain?)


#### Dependencies

1. **Property Dependency**
2. **Schema Dependency**

- Allows user to provide dependencies for properties in an object.

e.g.
In an address object we may have street name, city, postcode and country.
If we made postcode a dependency of street name, then the user cannot add a street name without a postcode.

```js
{
  "type": "object",

  "properties": {
    "street-name": { "type": "string" },
    "city": { "type": "string" },
    "postcode": { "type": "string" },
    "country": { "type": "string" }
  },

  "required": ["street-name"],

  "dependencies": {
    "street-name": ["postcode"] // This is unidirectional, one can enter postcode without street-name, but not a street-name without a postcode. To make it bidirectional we can add the extra dependency as such
    "postcode": ["street-name"]
  }
}
```

**patternProperties** can come in handy when you are only partially sure of what the given objects key-name will be.

```js
{
  "type": "object",
  "patternProperties": {
    "^S_": { "type": "string" },
    "^N_": { "type": "number" }
  },
  "additionalProperties": false
}
```

Any property that starts with S_ and is of type string will be valid and same applies for any property that starts with N_ and is of type number.
