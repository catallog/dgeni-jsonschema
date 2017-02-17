import templateUrl from './template.html';

class ComponentController {
  constructor(){};
  $onInit(){};
}

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
    defaultOptional: '@',
    list: '@',
    onlyOptional: '<?'
  },
  controller: [ComponentController],
  templateUrl: templateUrl
};

export default componentConfig;
