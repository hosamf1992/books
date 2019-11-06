
import bookApp from './cmps/book-app.cmp.js';
import about from './cmps/about.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';
import bookAdd from './cmps/book-add.cmp.js';


const ourTeam = {
    template : `
        <section class="our-team" >
            <h3>Our Team</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt optio, excepturi explicabo harum consequatur eveniet at facilis pariatur iusto architecto minus commodi sequi eos cupiditate, hic aliquid nostrum modi?</p>

        </section>
    `
};
const ourVision = {
    template : `
        <section class="our-vision" >
            <h3>Our Vision</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt optio, excepturi explicabo harum consequatur eveniet at facilis pariatur iusto architecto minus commodi sequi eos cupiditate, hic aliquid nostrum modi?</p>
                
        </section>
    `
}



const myRoutes = [
    
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/add',
        component: bookAdd
    },
    {
        path: '/about',
        component: about,
        children: [
            {
                path: 'team',
                component: ourTeam
            },
            {
                path: 'vision',
                component: ourVision
            }

        ]
    },
    {
        path: '/book/details/:id',
        component: bookDetails
    },

   
   
    
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;