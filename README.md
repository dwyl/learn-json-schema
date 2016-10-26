# Learn JSON Schema

## _Why?_

Building an **API** is the _single **most important technical activity**_
on the road to success for a web application/project. <br />
Even if the API is only "_consumed_" _internally_ in your team/company,
being crystal clear on exactly which parameters the API accepts as input and
what format the _response_ will have is referred to as the API "contract".

> For _way_ more background reading on building APIs
see: [_github.com/dwyl/**learn-api-design**_](https://github.com/dwyl/learn-api-design)

If you have used a REST API you will be familiar with JSON schemas, want to understand them...?

## _What?_


## _How?_

The _best_ place to start is with a sample schema:



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

### Validation

+ Online Schema Validator: http://jsonschema.net/
+ Alternative Online Schema Validator: http://www.jsonschemavalidator.net/

### Visualisation

+ JSON schema viewer? http://stackoverflow.com/questions/35739050/is-there-any-json-schema-viewer
  + http://jlblcc.github.io/json-schema-viewer/
  + https://navneethg.github.io/jsonschemaviewer/

### Parsing

+ `$ref` parser: https://www.npmjs.com/package/json-schema-ref-parser
(_lets you Parse, Resolve, and Dereference JSON Schema $ref pointers_)

### Validators

+ "TV4" (_the most popular but not the fastest_): http://geraintluff.github.io/tv4/


## Background Reading

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
+ ***Understanding JSON Schema***: https://spacetelescope.github.io/understanding-json-schema/index.html _or_  [UnderstandingJSONSchema.pdf](https://github.com/dwyl/learn-json-schema/files/553730/UnderstandingJSONSchema.pdf)
