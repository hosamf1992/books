import theRouter from '../routes.js'

export default {
  router: theRouter,

    template: `
       <section>
      <h1>Header</h1>
      <nav>
                <router-link to="/book" >Books</router-link> |
                <router-link to="/about" >About</router-link> |
                <router-link to="/book/add" >Book Add</router-link>
            
            </nav>
       <router-view></router-view>

    </section>
    `,
    
}