import {bookServices} from '../services/book-service.js';

export default {
 

    template: `
       <section>
      <h1>Book Add</h1>
      <h2>Search book</h2>
      <input  v-model="search" type="text">
      <button @click="searchBook">Search</button>
      <ul>

    <li  v-for="currBook in books" :key="currBook.id" >{{currBook.volumeInfo.title}} <button @click="addBook(currBook.id)">+</button>
 <div> <img :src="currBook.volumeInfo.imageLinks.smallThumbnail"></div>
  </li>

      </ul>
     

    </section>
    `,


created(){
  console.log('book-add created')
},
data(){
  return{
    books:[],
    search:''

  }
},
methods:{
  searchBook(){
    bookServices.getGoogleBooks(this.search)
    .then(res=>this.books=res);
  },

  addBook(id){
   
   let googleBook= bookServices.googleBookId(id,this.books)
   console.log(googleBook);
    bookServices.addGoogleBook(googleBook)

    
      const msg = {
          txt: "Added Succefully",
          type: 'success'
      }
      eventBus.$emit('show-msg', msg);;
     


  }
},
  

}
