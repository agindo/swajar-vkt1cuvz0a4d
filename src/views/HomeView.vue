<template>
  <div>
<!-- component -->
<!-- Main container -->
<div>
  <!-- Flex container for centering items -->
  <div class="flex h-screen flex-col items-center justify-center">
    <!-- Container for login form -->
    <div class="max-h-auto mx-auto max-w-xl w-60">
      <!-- Login title and description -->
      <div class="mb-4">
        <h1 class="text-xl font-semibold">Welcome back</h1>
        <p class="text-gray-400 leading-tight text-sm">Welcome back! Please enter your account</p>
      </div>
      <!-- Login form -->
      <div>
        <el-input placeholder="Username" v-model="username"></el-input>
      </div>
      <div class="mt-1">
        <el-input placeholder="Password" v-model="password" show-password></el-input>
      </div>
      <div class="mt-2">
        <el-button type="primary" size="small" class="uppercase w-full">Login / Sign In</el-button>
      </div>
      <!-- Signup link -->
      <p class="text-center text-xs mt-3 p-0">No account? <a class="text-blue-500 cursor-pointer" @click="getViews('/PBcw3g0kC0xt')">Create one</a> </p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    getViews: function(value){
      if (this.$route.path !== value) {
        this.$router.push(value);
      }
    }
  }
}
</script>
