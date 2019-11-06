import bookPreview from  './book-preview.cmp.js';



// Vue.component('book-list', {
    export default {
    props: ['books'],
    template: `
    <section class="book-list-container">
        <ul class="book-list">
       

         
          <book-preview  v-for="currBook in books" :key="currBook.id"  :book="currBook"></book-preview>
            
        </ul>
    </section>
    `,

 
    data() {
    return {

     }
    },
   
 computed:{
    

  },
components: {
    bookPreview
}
}


