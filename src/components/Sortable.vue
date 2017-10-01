<script>
import Vue from 'vue'
import makeSorter from '../util/sorter'
import Color from '../plugins/Color'
Vue.use(Color);

export default {
  props: {
    pattern: {
      type: Array,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },
  methods: {
    sort(obj) {
      let sorter = makeSorter(this.pattern);
      return sorter(obj);
    },
    getStyle(all, n) {
      let step = 10 / all;
      let color="rgba(255,255,0,";
      let opacity = step * (all - n) / 10;
      let newTone = color+opacity+")";

      return {
        backgroundColor: newTone,
        paddingLeft: 10 * (all - n) + 'px'
      };
    }
  },
  render(createElement) {
    let children = this.sort(this.item).reverse();
    let result;
    for (var i = 0; i < children.length; i++) {
        result = createElement('li', [
          createElement('h5',
            { style: this.getStyle(children.length, i) },
            children[i].key + ': ' + children[i].value
          ),
          createElement('ul', [result])
        ]);
    }

    return createElement('ul', [result]);
  }
}
</script>
<style scoped>
ul {
  margin: 15px 0 0;
  padding: 0;
  list-style: none;
}
li {
  padding: 0;
}
li> h5{
  margin: 0;
  padding: 5px 10px;
  padding-left: 5px;
}
li> ul {
  margin: 0;
}
li> ul> li {
  padding: 0;
}
</style>
