<script setup lang="ts">
const checkValue = defineModel<boolean>('checkValue', { default: true })

const { width, height } = withDefaults(defineProps<{
  width?: string
  height?: string
}>(), {
  width: '50px',
  height: '30px'
})

const emit = defineEmits<{
  change: [checkValue: boolean]
}>()

// 监听change事件
function onChange() {
  emit('change', checkValue.value)
}
</script>

<template>
  <div class="checkbox-container">
    <input type="checkbox" id="cb5" v-model="checkValue" class="switch switch-flip" @change="onChange">
    <label for="cb5" data-tg-on="On" data-tg-off="Off" class="switch-btn" />
  </div>
</template>

<style lang="scss" scoped>
.checkbox-container .switch {
  display: none;
}
.checkbox-container {
  background: none;
}

.checkbox-container .switch + .switch-btn {
  outline: 0;
  display: block;
  width: v-bind(width);
  height: v-bind(height);
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container .switch + .switch-btn:after,
  .checkbox-container .switch + .switch-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}

.checkbox-container .switch + .switch-btn:after {
  left: 0;
}

.checkbox-container .switch + .switch-btn:before {
  display: none;
}

.checkbox-container .switch:checked + .switch-btn:after {
  left: 50%;
}

.checkbox-container .switch-flip + .switch-btn {
  padding: 2px;
  transition: all 0.2s ease;
  font-family: sans-serif;
  perspective: 100px;
}

.checkbox-container .switch-flip + .switch-btn:after,
  .checkbox-container .switch-flip + .switch-btn:before {
  display: inline-block;
  transition: all 0.4s ease;
  width: 100%;
  text-align: center;
  position: absolute;
  line-height: 30px;
  font-weight: bold;
  color: #fff;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 4px;
}

.checkbox-container .switch-flip + .switch-btn:after {
  content: attr(data-tg-on);
  background: #7802c6;
  transform: rotateY(-180deg);
}

.checkbox-container .switch-flip + .switch-btn:before {
  background: #197dff;
  content: attr(data-tg-off);
}

.checkbox-container .switch-flip + .switch-btn:active:before {
  transform: rotateY(-20deg);
}

.checkbox-container .switch-flip:checked + .switch-btn:before {
  transform: rotateY(180deg);
}

.checkbox-container .switch-flip:checked + .switch-btn:after {
  transform: rotateY(0);
  left: 0;
  background: #7e09eb;
}

.checkbox-container .switch-flip:checked + .switch-btn:active:after {
  transform: rotateY(20deg);
}

</style>
