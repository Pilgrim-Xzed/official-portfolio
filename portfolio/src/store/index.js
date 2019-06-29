import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        title:"Fullstack Developer & Mentor",
        meta:"I code using best practices and deliver right on time",
        intro:"Hi, I’m Sa'id Bello. Nice to meet you.",
        aboutme:"Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
        skills:[
            {
                title:"Back-End",
                description:"",
                languages:[
                    'Nodejs',
                    'Python/Django',
                    'Express',
                    
                ]
            }
        ]

    },
    mutations:{

    },
    getters:{

    },
    actions:{

    }


})