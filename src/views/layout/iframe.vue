<script lang="ts" setup>
const route = useRoute()

const src = ref<string>(route.meta.url as string)

</script>

<template>
  <iframe :src="src" width="100%" height="100%" />
</template>
