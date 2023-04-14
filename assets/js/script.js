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

      msg: '',
      newNote: '',
      new: {}
    }
  },
  
  methods: {
    rmv(nota, i) {
      this.msg = '';
      if (nota.done === true) this.note.splice(i,1);
      else {
        this.message('Questo non lo hai ancora fatto!');
      }
    },

    message(msg) {
      this.msg = msg;
      setTimeout(this.out, 3000);
    },

    out(){
      this.msg = '';
    },

    add() {
        if (this.newNote.length <= 4) this.message('La nota è troppo breve!');
        else {
        this.new = {
          text: this.newNote,
          done: false
        };
        this.note.unshift(this.new);
      }
      this.newNote = ''
    }
    
  }
}).mount('#app');