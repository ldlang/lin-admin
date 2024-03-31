<script setup lang="ts">
function refreshClick() {
  window.location.reload()
}

</script>

<template>
  <div class="w-20 h20 ml-20 flex items-center hand">
    <i class="iconfont icon-shuaxin text-20" @click="refreshClick" />
  </div>
</template>
