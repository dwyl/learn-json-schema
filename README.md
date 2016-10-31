<!-- # Learn JSON Schema -->

## _Why?_

Building an **API** is the _single **most important technical activity**_
on the road to success for a web application/project. <br />
Being precise with exactly which parameters the API accepts as input and
what format the _response_ will have is _vital_.
Even if the API is only "_consumed_" _internally_ in your team/company,
giving people a clear reference is the difference between success & failure.

> For _way_ more _background reading_ on ***building APIs***
see: [_github.com/dwyl/**learn-api-design**_](https://github.com/dwyl/learn-api-design)

## _What?_

Defining your "model" as a JSON Schema means it's "portable",
you can load a `.json` file _easily_ in Node.js, Browsers and "Native" clients. <br />
There are JSON schema validators in
JavaScript (_obviously_), Ruby, Python, Java, ASP.NET, C/C++ etc.
Because it's an Open Specification (_currently Draft v4_) anyyone can
write a parser/validator

This is referred to as the API "_contract_".

> To be clear, we _prefer_ the _brevity_ of Hapi's `Joi` validator,
however we think JSON Schema is more _versatile_.

## _How?_

Start by visiting: http://jeremydorn.com/json-editor/


The _best_ place to start is with a _sample_ JSON Schema
and it's corresponding (_valid or invalid_) JSON Object (data):

Consider the following _basic_ schema for a `person`:

```js
{
  "type": "object",
  "properties": {
    "first_name": { "type": "string" },
    "last_name": { "type": "string" }
  }
}
```
This is a pretty basic JSON Schema which is very _permissive_.
The following data would be valid:

```js
{
  "first_name": "Georgina",
  "last_name": "Washington"
}
```




`"type"`


`"description"`


`"definitions"`


`"properties"`

`"additionalProperties"`


`"$ref"`


`"anyOf"`





## Useful Links

+ Basic examples: http://json-schema.org/examples.html
+ Basic docs: http://json-schema.org/documentation.html
+ Draft Specification V4: https://tools.ietf.org/html/draft-zyp-json-schema-04
+ Structuring & Reuse:
https://spacetelescope.github.io/understanding-json-schema/structuring.html

### Validation (_Online_)

+ Online Schema Validator: http://jsonschema.net/
+ Alternative Online Schema Validator: http://www.jsonschemavalidator.net/

### Validators (`JavaScript`)

+ "TV4" (_the most popular but not the fastest_): http://geraintluff.github.io/tv4/
+ `AJV` (_performance focussed_): https://www.npmjs.com/package/ajv

### Visualisation

+ JSON schema viewer? http://stackoverflow.com/questions/35739050/is-there-any-json-schema-viewer
  + http://jlblcc.github.io/json-schema-viewer/
  + https://navneethg.github.io/jsonschemaviewer/

### `$ref` Parsing

+ `$ref` parser: https://www.npmjs.com/package/json-schema-ref-parser
(_lets you Parse, Resolve, and Dereference JSON Schema $ref pointers_)



## Background Reading

+ ***Understanding JSON Schema***: https://spacetelescope.github.io/understanding-json-schema/index.html _or_  [UnderstandingJSONSchema.pdf](https://github.com/dwyl/learn-json-schema/files/553730/UnderstandingJSONSchema.pdf)
+ Stop Comparing JSON and XML: http://www.yegor256.com/2015/11/16/json-vs-xml.html
(_clearly biased toward XML but makes valid points regarding XPath, XSL and Schema_)
+ XML vs JSON Verbosity Stats:
http://www.codeproject.com/Articles/604720/JSON-vs-XML-Some-hard-numbers-about-verbosity
(_attempts to benchmark XML "Verbosity" against equivalent JSON and finds that
for zipped data the "cost" of using XML is 21.3% slower load times..._)
+ Why XML won't die: XML vs. JSON for your API:
http://apigee.com/about/blog/technology/why-xml-wont-die-xml-vs-json-your-api
(_concludes that JSON is "better" for simpler APIs but use XML for more complex..._)
+ _Elegant APIs_ with JSON Schema: https://brandur.org/elegant-apis
+ How Heroku API uses JSON Schema: https://blog.heroku.com/heroku-http-api-toolchain
+ Schema.org Testing Tool: https://search.google.com/structured-data/testing-tool


## tl;dr

### Why _Not_ XYZ (_Alternative_) Schema...?

We _attempted_ to use several "_alternatives_":
+ [schema.org](http://schema.org) - uses micro-formats or HTML "hypermedia"
instead of a more "efficient" data format.
+ [GraphQL Schema](http://graphql.org/learn/schema/) - GraphQL
is _really promising_. We [_used_ GraphQL](https://github.com/dwyl/learn-graphQL)
for our "Inspirational Search" project and _felt_ the pros & cons.
It was _good_ for succinctness, however the schema validation and error debugging (_when something is wrong_) was tedious.
We would often spend _hours_ trying to debug a complex schema without any luck,
and then someone would spot a missing character
(_which was not reported in the error message_) and it would "_magically_" work.
+ [`Joi`](https://github.com/hapijs/joi) - superb for backend (node.js)
validation, concise syntax, however not easy to modularize or extend.
+ XSD (XML Schema Definition) - powerful but way more than what we need and
xml is not ideal for "full-stack" where JSON can be loaded as a
_static_ file in Clients and easily used for client-side validation.
