import Component from '@glimmer/component';
import EmberArray from '@ember/array';


export default class PaginationComponent extends Component {
    
    async model(){
        let response = await fetch('/api/rentals.json');
        let { data } = await response.json();
        let arrayLength = data.length
        return this.store.findAll('id');


    }
}
