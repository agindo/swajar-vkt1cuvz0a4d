<template>
  <div>
    <div class="card">
      <!-- <p>{{ data }}</p> -->
      <p class="p-0 m-0" :class="data.look.class">{{ data.title }}</p>
      <p class="raleway-400 p-0 m-0">{{ data.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>
<style scoped>
.card {
  padding: 2.5rem;
  background-color: #FFF;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>