import templateUrl from './template.html';

class ComponentController {
  constructor(){};
  $onInit(){};
}

/**
 * @name Component01
 *
 * @description
 * Here goes this component01 description
 *
 * @param {string} title - title description
 * @param {int} counter - counter description
 * @param {string} [default-optional=defaultValue] - default-optional description
 * @param {array} list - list description
 * @param {array} [only-optional] - only-optional description
 *
 **/
const componentConfig01 = {
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

/**
 * @name Component02
 *
 * @description
 * Here goes this component02 description
 *
 * @param {string} title - title description
 *
 **/
const componentConfig02 = {
  bindings: {
    title: '@'
  },
  controller: [ComponentController],
  templateUrl: templateUrl
};

export default componentConfig;
