<template>
  <div class="bg-gray-50">
    <div class="flex h-screen flex-col items-center justify-center">
      <div class="m-36">
        
        <div class="flex flex-wrap">
          <div class="flex-auto m-1" v-for="(item, index) in menu" :key="index">
            <!-- <el-card shadow="hover" class="cursor-pointer p-5">
              <div>
                <p class="p-0 m-0" :class="item.look.class">{{ item.title }}</p>
                <p class="raleway-400 p-0 m-0">{{ item.description }}</p>
              </div>
            </el-card> -->
            <Card :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menu from '@/assets/json/ingredient.json'
import Card from '../components/Card.vue'
export default {
  name: 'AboutView',
  components: {
    Card
  },
  data() {
    return {
      menu: menu.materi
    }
  }
}
</script>