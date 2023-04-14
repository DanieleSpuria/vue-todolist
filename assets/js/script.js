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
          done: true
        },
      ]
    }
  },
  
  methods: {

  },

  mounted(){
    console.log('ciao');
  }
}).mount('#app');