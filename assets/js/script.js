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
      ],

      msg: ''
    }
  },
  
  methods: {
    rmv(nota, i) {
      this.msg = '';
      if (nota.done === true) this.note.splice(i,1);
      else this.msg = 'Questo non lo hai ancora fatto!';
    },
  },

  mounted(){
    console.log(this);
  }
}).mount('#app');