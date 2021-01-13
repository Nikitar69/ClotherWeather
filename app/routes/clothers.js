import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];
const SIZE_PER_PAGE = 3



export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/clother.json');
    let { data } = await response.json();

    return data.map(model => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}