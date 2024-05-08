<template>
  <div>
    <div class="flex h-screen flex-col items-center justify-center">
      <div class="m-36">
        <div class="flex flex-wrap">
          <div class="flex-auto m-1" v-for="(item, index) in menu" :key="index">
            <el-card shadow="always" class="p-5">
              <div>
                <p class="p-0 m-0" :class="item.look.class">{{ item.title }}</p>
                <p class="raleway-400 p-0 m-0">{{ item.description }}</p>
              </div>
              <div class="mt-3">
                <el-button icon="el-icon-right" size="mini" class="lato-regular">Lanjut</el-button>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menu from '@/assets/json/ingredient.json'
export default {
  name: 'AboutView',
  data() {
    return {
      menu: menu.materi
    }
  }
}
</script>