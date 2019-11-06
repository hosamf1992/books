'use strict';

import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';


Vue.config.productionTip = false

var options = {
    el: '#my-app',
    template: `
    <section>
    <user-msg></user-msg>
  <app-header></app-header>
    </section>
       
            
          
    `,
    data() {
        return {
            
        }
    },
 
  
    components: {
        appHeader,
        userMsg
      
     
    }
}



new Vue(options);


