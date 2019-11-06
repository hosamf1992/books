

// Vue.component('book-filter', {
    export default {
    template: `
    <section class="container book-filter-container">
        <h2> FilterBy</h2>
        <input type="text" placeholder="Search by Name" v-model="filterBy.name" />
        <input type="number" placeholder="Search by  price" v-model.number="filterBy.price" />
        <button @click=onFilter>Filter</button>
    </section>
    `,
    data() {
        return {
            filterBy: {
                name : '',
                price:''
            }
        }
    },methods:{
        onFilter(){
       
     

            this.$emit('filtered', this.filterBy);
           
        }
    },
    
}