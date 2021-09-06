<template>
    <div class="card">
        
<div id="item">
    <div class="app-display">
      <quick-edit
        v-model="textValue"
        :buttonCancelText="buttonCancelText"
        :buttonOkText="buttonOkText"
        :emptyText="emptyText"
        @beforeinput="log('beforeinput', $event)"
        @input="log('input', $event)"
        @rawInput="log('rawInput', $event)"
        @close="log('close', $event)"
        @show="log('show', $event)"
      ></quick-edit>
    
  </div>
  </div>

    </div>
    
</template>
<script>
import QuickEdit from './quick-edit.vue';

export default {
  name: 'item',
  components: {
    QuickEdit,
  },
  data() {
    return {
      buttonCancelText: 'Cancel',
      buttonOkText: 'Ok',
      emptyText: 'o',
      mode: 'ok',
      placeholderValue: '',
      type: 'text',
      required: false,
      showButtons: true,
      min: 0,
      max: 100,
      maxlength: 10,
      textValue: '',
      multipleValue: [],
      options: [
        {
          text: 'Foo',
          value: 'fooValue',
        },
        {
          text: 'Bar',
          value: 'barValue',
        },
        {
          text: 'Qux',
          value: 'quxValue',
        },
      ],
      types: [
        'text',
        'textarea',
        'select',
        'checkbox',
        'radio',
        'boolean',
        // Input types
        'button',
        'color',
        'date',
        'datetime',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'note',
        'number',
        'password',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'time',
        'url',
        'week',
      ],
      modes: ['ok', 'cancel', 'ignore'],
    };
  },
  methods: {
    log(...args) {
      console.log(...args);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style lang="scss">
body {
  color: #f8f8f8;
  background: #333;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 740px;
  }

  .app-properties {
    > div {
      margin: 0 8px 8px 0;

      > label {
        display: block;
      }
      .vue-quick-edit {
        display: inline-block;
        margin-left: 8px;
      }
    }
  }
}
</style>

