import {bookServices} from '../services/book-service.js';


export default {
    props: ['results','bookId'],
    template: `
  
       <section class="review-container">
      <h2>Add review!</h2>
       <form @submit.prevent="addReviews"  >
       <input v-model="review.fullName" ref="inputFullName" type="text" placeholder="Enter full name"  />
        <h2>Rate: 1-5</h2>
       <select v-model="review.rate" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                </select>
                <h2>Date</h2> 
                <input ref="dateInput"   :value="dateNow" type="date"/>
                <h2>Add your comment</h2>
                <textarea v-model="review.text" name="message" rows="10" cols="30">Add Free Text.</textarea>
               <div> <button  >Add review</button> </div>

     </form>

     <section  class="reviewsList">
     <h1 class="reviews-title"> Reviews</h1>
     <ul  class="review-list">
       <li  v-for="review in results">
       <p>Full name: {{review.fullName}} </p>
       <p>Rate: {{review.rate}} </p>
       <p>Date: {{review.date}} </p>
       <p>Comment: {{review.text}} </p> 
       <button  @click="removeReview(review.id)" > X</button>
      
       </li>
     </ul>
    </section>

    </section>
    `,

    data(){
      return{
          review:bookServices.getEmptyReview(),
       
    }
    }
   , methods:{
    addReviews(){
        let date=  this.$refs.dateInput.value;
        this.review.date=date;

        bookServices.addReview(this.bookId,this.review);
        this .review=bookServices.getEmptyReview()

     },
     removeReview(reviewId) {
        
        bookServices.removeReview(this.bookId,reviewId)
            .then(()=>{
                const msg = {
                    txt: "Removed Succefully",
                    type: 'error'
                }
                eventBus.$emit('show-msg', msg);;
               
            })
    }
    
    },

    computed:{
        
      dateNow(){
       let date= new Date().toISOString().slice(0,10)
          return date;
      },
    
       
        
    },
    mounted() {
      
        this.$refs.inputFullName.focus();
        
    },
    

    

}