<template>
<div>
  <h4><a @click="open = !open">Данные #{{ number }}</a></h4>
  <transition-group name="flip-list" tag="ul" v-colorful-children v-show="open">
    <li v-for="(item, index) in sort(item)" :key="item.key"
      :style="{ paddingLeft: 10 * index + 'px' }">{{ item.key }}: {{ item.value }}</li>
  </transition-group>
</div>
</template>
<script>
import Vue from 'vue'
import makeSorter from '../util/sorter'
import Color from '../plugins/Color'
Vue.use(Color);

export default {
  data() {
    return {
      open: true
    }
  },
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
    }
  }
}
</script>
<style scoped>
ul {
  margin: 5px 0 0;
  padding: 0;
  list-style: none;
}
li {
  padding: 5px 10px;
}

.flip-list-move {
  transition: transform .5s;
}
</style>
