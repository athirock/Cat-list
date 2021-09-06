<template>
  <div class="home">
    <h1>oo</h1>
    <AddCategorieForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddCategorieForm from '@/components/AddCategorieForm.vue';


@Component({
  components: {
   AddCategorieForm,
  },
})
export default class Home extends Vue {}
</script>
