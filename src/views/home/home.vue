<script setup lang="ts">

const poetryList = ref<{
  title: string,
  paraphrase: string,
}[]>([
  {
    title: '昨夜西风凋碧树，独上高楼，望尽天涯路。',
    paraphrase: `
    昨天夜里秋风萧瑟，凋零了树木。我独自登上高楼，
    遥望那消失于天涯尽头的道路。
    要想成功必须要树立好自己的目标，人生之路本来就是风雨交加，
    坎坷难行，而且充满了孤独，高处不胜寒。人要想成功，
    只有“独上高楼，望尽天涯路”，高瞻远瞩，看到别人看不到的地方，
    明确自己的目标与方向，独辟蹊径。`
  },
  {
    title: '衣带渐宽终不悔 为伊消得人憔悴的意思。',
    paraphrase: `我虽日渐消瘦却决不懊悔，为了你，
    我情愿一身憔悴。成大事业、大学问绝不是轻而易举的，
    会遇到艰难险阻，必须要有一种锲而不舍的坚毅性格和执
    着态度，废寝忘食，攻坚克难，经过辛勤的努力，直至人瘦带宽也不后悔。`
  },
  {
    title: '众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。',
    paraphrase: `我在人海中寻找了她千百回，不曾想不经意间一回头，
    却在灯火零落处发现了她。成大事业、大学问必须孜孜以求，
    反复追寻、研究，下足功夫，在足够的积累之后，必然由量变到质变，
    不经意间已追逐到了，成功了。`
  }
])

</script>

<template>
  <div>
    <el-card shadow="hover">
      <div class="flex">
        <el-avatar size="large" class="shrink-0" src="/lin-admin/image/avatar.jpg" />
        <div class="flex mx-10 flex-col justify-between">
          <h3>学海无涯，苦乐自知。</h3>
          <div class="text-15 mt-5">苦，乃求学之必经之路。乐，为求学之甘果。攻克难题，掌握新技，
            喜悦与成就感如泉水涌，那份满足与自豪，非物质之享所能及。
          </div>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover" class="my-10">
      <h2 class="text-center">人生三大境界</h2>
    </el-card>
    <div class="flex">
      <template v-for="(item,index) in poetryList" :key="index">
        <el-card shadow="hover" class="flex-1"
          :class="{'mr-10': index < poetryList.length - 1}">
          <template #header>
            <h3>{{ item.title }}</h3>
          </template>
          <div>
            {{ item.paraphrase }}
          </div>
        </el-card>
      </template>
    </div>
  </div>
</template>
