<template>
  <div>
    <div class="card cursor-pointer" v-if="data.id != 0" @click="getViews('/F6D2wQo5g6Ka/z1s6QUD8D2Cx/'+data.code)">
      <p class="p-0 m-0" :class="data.identity.style">{{ data.title }}</p>
      <p class="raleway-400 p-0 m-0">{{ data.description }}</p>
    </div>
    <div class="card cursor-pointer" v-if="data.id == 0" @click="getViews('/'+data.code)">
      <p class="p-0 m-0" :class="data.identity.style">{{ data.title }}</p>
      <p class="raleway-400 p-0 m-0">{{ data.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  methods: {
    getViews: function(value){
			if (this.$route.path !== value) {
				this.$router.push(value);
			}
		}
  },
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