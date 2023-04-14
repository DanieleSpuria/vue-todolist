const {createApp} = Vue;

createApp({
  data() {
    return{
      note: [
        {
          text: 'Fare la spesa',
          done: false
        },
        {
          text: 'Bere la birra',
          done: true
        },
        {
          text: 'Pulire il codice',
          done: false
        }
      ],
      new: {},
      msg: '',
      newNote: ''
    }
  },
  
  methods: {
    rmv(nota, i) {
      this.msg = '';
      if (nota.text === 'Bere la birra') this.message('Non puoi cancellarlo!')
      else {
        if (nota.done === true) this.note.splice(i,1);
        else {
          this.message('Questo non lo hai ancora fatto!');
        }
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
    },

    empty(i) {
      this.msg = '';
      this.note.splice(i);
      setTimeout(this.reality, 3000)
    },

    reality() {
      this.new = {
        text: 'Bere la birra',
        done: true
      };
      this.note.unshift(this.new);
    },

    time() {
      this.note.forEach(this.eccola)
    },

    eccola(nota){
      if (nota.text === 'Bere la birra') nota.done = !nota.done
    }
  },

  mounted(){
    setInterval(this.time, 1000)
  }
}).mount('#app');