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
 * @param {object} params - params description
 * @param {string} [params.name=DefaultName] - Name of this entry
 * @param {int} params.id - ID of this entry
 *
 **/
const componentConfig = {
  bindings: {
    title: '@',
    params: '<'
  },
  controller: [ComponentController],
  templateUrl: templateUrl
};

export default componentConfig;
