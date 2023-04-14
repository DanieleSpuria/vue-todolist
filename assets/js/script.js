const {createApp} = Vue;

createApp({
  data() {
    return{
      note: [
        {
          text: 'Spesa',
          done: false
        },
        {
          text: 'Birra',
          done: false
        },
        {
          text: 'Codice',
          done: false
        },
      ]
    }
  },
  
  methods: {

  },

  mounted(){
    console.log(this);
  }
}).mount('#app');