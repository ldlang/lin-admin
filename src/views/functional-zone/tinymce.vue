<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'

const tinymceContent = ref('<p><img src="https://ldlang.github.io/lin-note/avatar.jpg" alt="logo" width="231" height="231"></p>')
const init = ref({
  menubar: true, // 顶部菜单栏是否开启
  height: 800,
  license_key: 'gpl', // 使用开源模式
  convert_urls: false, // 禁止自动转换路径
  language: 'zh_CN',
  // 插件
  plugins: `help preview importcss searchreplace autolink directionality code visualblocks visualchars 
  fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists
   wordcount emoticons accordion`,
  toolbar_mode: 'Wrap', // 工具栏模式
  // 自定义工具栏
  toolbar: `help code undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough
    | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat |
     charmap emoticons | code fullscreen preview | print | pagebreak anchor codesample | ltr rtl`,
  branding: false, // 是否显示右下角logo
  nonbreaking_force_tab: true, // 开启tab为添加空格
  extended_valid_elements: `a[href]`, // 标签可以设置的属性
  image_title: true, // 图片可以加标题
  image_caption: true,
  contextmenu: 'link', // 右键菜单
  file_picker_callback: (callback: any, value: any, meta: any)=> {
    if (meta.filetype === 'image') {
      callback('https://ldlang.github.io/lin-note/avatar.jpg', { alt: 'logo' })
    }
    // if (meta.filetype === 'image') {
    //   const input = document.createElement('input')
    //   input.setAttribute('type', 'file')
    //   input.setAttribute('accept', meta.filetype)
    //   input.addEventListener('change', (e)=> {
    //     const file = (e.target as HTMLInputElement)?.files?.[0]
    //     const data = new FormData()
    //     data.append('file', file)
    //     'oss'.then(res=> {
    //       callback(res.link, { alt: 'logo' })
    //     })
    //   })
    // }
  },
  images_upload_handler: (blobInfo: any)=> {
    return new Promise((resolve, reject)=> {
      resolve('https://ldlang.github.io/lin-note/avatar.jpg')
    })
    // return new Promise((resolve, reject)=> {
    //   const data = new FormData()
    //   data.append('file', blobInfo.blob(), blobInfo.filename())
    //   // oss 上传接口
    //   'oss'.then(res=> {
    //     resolve(res.link)
    //   }).catch(err=> {
    //     reject(err)
    //   })
    // })
  }
})

</script>

<template>
  <el-card>
    <template #header>
      <div class="text-center">tinymce富文本编辑器</div>
    </template>
    <Editor v-model="tinymceContent" :init="init"
      api-key="no-api-key" />
  </el-card>
</template>

<style lang="scss">
// 隐藏logo
.tox-promotion{
  .tox-promotion-link{
    display: none !important;
  }
}
.tox-tinymce-aux {
  z-index: 9999 !important;
}
</style>
