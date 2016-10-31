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
