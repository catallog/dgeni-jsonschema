# dgeni-jsonschema
A [Dgeni](https://github.com/angular/dgeni) package for generating [JSON Schema](http://json-schema.org/) from [JSDoc](http://usejsdoc.org/) documentation in source code.


# What does this do?

It uses the JSDoc markup to structure a JSON Schema and then renders it to the file.
So, this anippet ...

``` javascript
/**
 * @name multyParameterComponent
 *
 * @description
 * Here goes this component description
 *
 * @param {string} title - title description
 * @param {int} counter - counter description
 * @param {string} [default-optional=defaultValue] - default-optional description
 * @param {array} list - list description
 * @param {array} [only-optional] - only-optional description
 *
 **/
const componentConfig = {
  bindings: {
    title: '@',
    counter: '@',
    defaultOptional: '@?',
    list: '<',
    onlyOptional: '<?'
  },
  controller: [ComponentController],
  templateUrl: templateUrl
};
```

... will be rendered as ...


```json
{
  "type": "object",
  "title": "multyParameterComponent",
  "description": "Here goes this component description",
  "properties": {
    "title": {
      "type": "string",
      "description": "title description"
    },
    "counter": {
      "type": "int",
      "description": "counter description"
    },
    "default-optional": {
      "type": "string",
      "description": "default-optional description",
      "default": "defaultValue"
    },
    "list": {
      "type": "array",
      "description": "list description"
    },
    "only-optional": {
      "type": "array",
      "description": "only-optional description"
    }
  },
  "required": [
    "counter",
    "list",
    "title"
  ]
}
```

# Dgeni configurations
- [basic_schema/dgeni-conf.js](./tests/basic_schema/dgeni-conf.js)


# Todos
- Generate live example;
- Provide more configurations samples.
