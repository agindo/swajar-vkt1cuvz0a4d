<template>
  <div class="bg-gray-50">
    <div class="flex h-screen flex-col items-center justify-center">
      <div class="card w-2/3 h-4/5">
        <div class="border-b px-0 pt-0 pb-6">
          <div class="flex justify-start items-center">
            <div class="mr-2">
              <img src="@/assets/img/id-card.png" alt="" class="w-14">
            </div>
            <div>
              <p class="plus-jakarta-sans-300 text-xl">Dio Aris Setiawan</p>
              <p class="roboto-slab-300 text-sm">198705062021211001</p>
            </div>
            <div class="flex-grow">
              <p class="plus-jakarta-sans-200 text-sm text-right">Ahli Pertama - Pranata Komputer, III/a</p>
              <div class="flex justify-end items-center px-0 pt-0 pb-0">
                <div>
                  <i class="el-icon-location-information"></i>
                </div>
                <div>
                  <p class="plus-jakarta-sans-200 text-sm text-right">Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-start items-center mt-3">
            <div class="w-16"></div>
            <!-- <div class="mr-1">
              <i class="el-icon-question"></i>
            </div> -->
            <div>
              <p class="titillium-web-extralight text-sm p-0 m-0">Magelang, 14 Mei 2024 / Pria / Islam / PPPK Aktif / Fungsional Tertentu</p>
            </div>
          </div>
        </div>
        <div v-for="index in 5" :key="index">
          <div class="flex justify-between items-center border-b px-0 pt-3 pb-3">
            <div class="flex-grow">
              <p>SWAJAR PPPK</p>
            </div>
            <div class="w-60">
              <p class="text-xs plus-jakarta-sans-200">Evaluasi Akademik</p>
              <p class="roboto-slab-300">Pilihan Ganda 0 / Essay 0</p>
            </div>
            <div class="w-36">
              <p class="text-xs plus-jakarta-sans-200">Sertifikat</p>
              <p class="plus-jakarta-sans-300">SWAJAR PPPK</p>
            </div>
            <div>
              <el-button icon="el-icon-more-outline" size="mini" circle></el-button>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center border-b px-0 pt-3 pb-3">
            <div>
              <p>PHOTO</p>
            </div>
            <div>
              <el-button-group>
                <el-button type="primary" icon="el-icon-upload" size="mini">Upload</el-button>
                <el-button type="primary" icon="el-icon-delete" size="mini"></el-button>
              </el-button-group>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProfileView'
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
