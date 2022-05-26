<template>
  <div class="tdesign-demo-block">
    <t-time-picker v-model="time1" :disabled="true" />
  </div>
</template>

<script>
export default {
  name: 'disabled',
  data() {
    return {
      time1: '11:12:10',
    };
  },
};
</script>
