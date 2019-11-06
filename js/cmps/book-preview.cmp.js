
// Vue.component('book-preview', {

    export default {
    props: ['book'],
    template: `
        <li>
            <h2> {{book.title.toUpperCase()}}</h2>
            <img class="img-preview" :src=book.thumbnail>
            <h3> {{setCurrency}}  {{book.listPrice.amount}}</h3>
            <router-link :to="bookDetailsLink">Details</router-link>
                  
        </li>
    `,
    

    computed:{
        setCurrency(){
       
            if(this.book.listPrice.currencyCode==='EUR')return '€';
            if(this.book.listPrice.currencyCode==='ILS')return '₪';
            if(this.book.listPrice.currencyCode==='USD')return '$';
           

        },
        bookDetailsLink() {
            return `/book/details/${this.book.id}`
        },
       
       
        
    },
}