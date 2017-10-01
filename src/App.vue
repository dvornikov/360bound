<template>
  <div class="container-fluid">
    <draggable v-model="parameters" :options="{forceFallback: true}">
      <button type="button" class="btn btn-primary" v-for="(item, index) in parameters" :key="item">{{ item }}</button>
    </draggable>

    <div class="row">
      <div class="col-md-6 col-xs-6">
        <p v-if="!data.length">Загрузка...</p>
        <sortable
          v-else
          v-for="(item, index) in data"
          :key="index"
          :pattern="parameters"
          :item="item"
          :number="index + 1">
        </sortable>
      </div>
      <div class="col-md-6 col-xs-6">
        <p v-if="!data.length">Загрузка...</p>
        <list
          v-else
          v-for="(item, index) in data"
          :key="index"
          :pattern="parameters"
          :item="item"
          :number="index + 1">
        </list>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import sortable from './components/Sortable.vue'
import list from './components/List.vue'
import getData from './util/data'

export default {
  name: 'app',
  data () {
    return {
      // Можно сделать динамическими.
      parameters: [
        'utmTerm',
        'utmCampaign',
        'utmSource',
        'utmMedium',
        'utmContent'
      ],
      data: []
    }
  },
  mounted() {
    let vm = this;
    // Показать, что данные могут быть ассинхронными.
    getData(vm.parameters).then((data) => {
      vm.data = data
    });
  },
  components: {
    draggable,
    sortable,
    list
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&subset=cyrillic');
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

.btn {
  margin-right: 5px;
  cursor: move !important;
}

* {
    font-family: 'Source Sans Pro', sans-serif;
}
</style>
