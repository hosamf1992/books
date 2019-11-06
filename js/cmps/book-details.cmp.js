import {bookServices} from '../services/book-service.js';
import bookReview from './review-add.cmp.js';


// Vue.component('book-details', {
    export default {
   name:'book-detials',
  
    template: `
    <section class="book-details" >
     
         <img :src=book.thumbnail>
         <h2>Title: {{book.title}}</h2>
         <h2>Subtitle: {{book.subtitle}}</h2>
         <h2>Language: {{book.language}}</h2>
         <h2>Page Count: {{pageCountTxt}}</h2>
         <h2>Published Date: {{publishedDate}}</h2>
         <h2>Price :<span  :class="{red:book.listPrice.amount>150,green:book.listPrice.amount<20}" > {{book.listPrice.amount}}</span></h2>
         <h2 v-if="book.listPrice.isOnSale" class='green'>Book in sale!!</h2>
         <h2>Authors</h2> <li  v-for="author in book.authors"> <span>{{author}}</span> </li>
         <h2>Categories</h2> <li  v-for="categorie in book.categories"> <span>{{categorie}}</span> </li>
         <h2>Description  </h2>
         <p @click='isTxtClicked=!isTxtClicked' v-if="subString.longTxt,!isTxtClicked"> {{subString.txt}} </p>
         <p @click='isTxtClicked=!isTxtClicked' v-if="isTxtClicked"> {{book.description}} </p>
      
         <book-review :results="reviews" :bookId="bookId" ></book-review>
         <router-link :to="'/book/details/' + prevBookId">  Prev Book </router-link>||

         <router-link :to="'/book/details/' + nextBookId">NEXT Book  </router-link>
     
        </section>
      
      
    `,
    data() {
        return {
            isTxtClicked:false,
            bookId:'',
           book:null,
           reviews:[],
           nextBookId: '',
           prevBookId: ''
          
        }
    },
   
    computed: {
        pageCountTxt() {
            let txt='';
           if(this.book.pageCount > 500)txt= 'Long reading';
           if(this.book.pageCount > 200 && book.pageCount < 500) txt= 'Long reading';
           if(this.book.pageCount < 100)txt=  'Light Reading';
            return this.book.pageCount + '-' + txt;

        },
        publishedDate(){
        let publishedDate= '';
        if(2019 > this.book.publishedDate+10)publishedDate= 'Veteran Book ';
        if(2019 < this.book.publishedDate+1)publishedDate= 'New!';
        return this.book.publishedDate + '-' + publishedDate;
        },
        subString(){
          
            let str = this.book.description;
            if(str.length > 100) {

                return {
                  txt: str.substring(0,100) +" ....... Read More",
                  longTxt:true
                }  
              } 

              return {txt:str}

        },
     
          
    },
    methods:{
        loadBook(){
            const bookIdx = this.$route.params.id;
            this.bookId=bookIdx;
    
            bookServices.getReviews(bookIdx)
            .then(reviews => this.reviews = reviews) ;
          

            bookServices.getBookById(bookIdx)
                .then(currBook => this.book = currBook,
                    
                    this.nextBookId = bookServices.getNextBookId(this.bookId),
                    this.prevBookId = bookServices.getPrevBookId(this.bookId)

                    
                    );
        }
    }
   , created(){

    
        this.loadBook();
     

    },
  
    components: {
      bookReview,



    }
   , watch: {
        '$route.params.id'() {
            console.log('Route param: "id" changed');
            this.loadBook();
        }
      }
   
}