'use strict';
import {bookServices} from '../services/book-service.js';

import bookList from './book-list.cmp.js';

import bookFilter from './book-filter.cmp.js';




Vue.config.productionTip = false



export default {
    template: `
     
        <section class='book-app'>
        <book-filter   @filtered="setFilter"></book-filter> 
        <book-list  :books="booksToShow"   ></book-list>

     
        
        </section>
  
    `,
    data() {
        return{
            books:[],
            filterBy: null,
            selectedBook: null,
        }
     
   
    },
    methods: {
        setFilter(filterBy) {
            console.log('Parent got filter:', filterBy);
            this.filterBy = filterBy
        },

     
        
    },
    computed: {
        booksToShow(){
            if (!this.filterBy) return this.books;
            var regex = new RegExp(`${this.filterBy.name}`, 'i');

            return this.books.filter(book => 
              
                regex.test(book.title) &&  this.filterBy.price >=book.listPrice.amount 
                    
            )
      
        }
     
    },
    created(){
  
        bookServices.getBooks()
            .then(book => this.books = book);

    },
    components: {
        bookList,
        bookFilter,


    }
}




