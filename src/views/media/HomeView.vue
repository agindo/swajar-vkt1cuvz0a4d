<template>
  <div>
    <el-container class="h-screen">
      <el-aside width="400px">
        <div>
          <div class="p-10 border-b">
            <p class="p-0 m-0" :class="style">{{ name }}</p>
            <p class="leading-tight raleway-400 p-0 m-0">{{ subname }}</p>
          </div>
          <div class="border-b px-10 py-2">
            <p class="lato-bold p-0 m-0">Materi</p>
          </div>
          <div v-for="(item, index) in materi" :key="index" @click="take_course(item)" class="cursor-pointer hover:bg-gray-50 border-b px-10 py-5">
            <p class="lato-regular leading-tight p-0 m-0">{{ item.title }}</p>
          </div>
        </div>
      </el-aside>
      <el-main heigth="100%">
        <div class="mx-32 my-5">
          <div class="mb-2">
            <div class="flex justify-start items-center">
              <div>
                <p class="lato-bold cursor-pointer hover:text-blue-500 text-base p-0 m-0" @click="getViews('/9edN7my6c66f')">Materi</p>
              </div>
              <div class="mx-2">
                <p class="text-xs p-0 m-0"><i class="el-icon-arrow-right"></i></p>
              </div>
              <div>
                <p class="lato-regular cursor-pointer hover:text-blue-500 text-sm p-0 m-0">{{ lesson }}</p>
              </div>
            </div>
          </div>
          <!-- <p class="p-0 m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
          <div class="card">
            <iframe class="mt-1 mb-1" width="100%" height="500" :src="active.source" v-if="active.type == 'youtube url/link'"></iframe>
            <iframe width="100%" height="1000" toolbar="0" :src="active.source" v-if="active.type == 'file url/link'"></iframe>
            <iframe width="100%" height="500" toolbar="0" :src="active.source" v-if="active.type == 'ppt url/link'"></iframe>
          </div>
          <div class="mt-4" v-if="submateri.length > 1">
            <el-button size="mini" class="poppins-regular" v-for="(item, index) in submateri" :key="index" @click="take_subcourse(item)">{{ item.title }}</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import menu from '@/assets/json/ingredient.json'
export default {
  name: 'HomeMediaView',
  data() {
    return {
      id: this.$route.params.id,
      menu: menu.materi,
      submenu: {},
      name: null,
      subname: null,
      materi: {},
      submateri: {},
      lesson: null,
      sublesson: null,
      active: {},
      style: null
    }
  },
  created() {
    this.active_course()
  },
  methods: {
    getViews: function(value){
			if (this.$route.path !== value) {
				this.$router.push(value);
			}
		},
    active_course: function() {
      for (let i = 0; i < this.menu.length; i++) {
        const element = this.menu[i];
        if (this.id == element.code) {
          this.submenu = element;
          this.name = element.title;
          this.subname = element.description;
          this.materi = element.lesson;
          this.submateri = element.lesson[0].sublesson;
          this.active =  element.lesson[0].sublesson[0];
          this.lesson = element.lesson[0].title;
          this.style = element.identity.style;
        }
      }
    },
    take_course: function(value) {
      console.log(value);
      this.lesson = value.title;
      this.submateri = value.sublesson;
      this.active =  value.sublesson[0];
    },
    take_subcourse: function(value) {
      this.active = value;
      // console.log(value);
    },
    // change_course: function(value) {
      
    // }
  },
}
</script>

<style scoped>
.card {
  /* width: 190px; */
  /* height: 254px; */
  background: #FFFFFF;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

#bottone5 {
 align-items: center;
 background-color: #FFFFFF;
 border: 1px solid rgba(0, 0, 0, 0.1);
 border-radius: .25rem;
 box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
 box-sizing: border-box;
 color: rgba(0, 0, 0, 0.85);
 cursor: pointer;
 display: inline-flex;
 font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
 font-size: 16px;
 font-weight: 600;
 justify-content: center;
 line-height: 1.25;
 min-height: 3rem;
 padding: calc(.875rem - 1px) calc(1.5rem - 1px);
 text-decoration: none;
 transition: all 250ms;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: baseline;
 width: auto;
}

#bottone5:hover,
#bottone5:focus {
 border-color: rgba(0, 0, 0, 0.15);
 box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
 color: rgba(0, 0, 0, 0.65);
}

#bottone5:hover {
 transform: translateY(-1px);
}

#bottone5:active {
 background-color: #F0F0F1;
 border-color: rgba(0, 0, 0, 0.15);
 box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
 color: rgba(0, 0, 0, 0.65);
 transform: translateY(0);
}
</style>
