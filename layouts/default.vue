<template>
  <div class="layout-default">
    <div class="layout-header">
      <my-header></my-header>
    </div>
    <div class="layout-main">
      <nuxt />
    </div>
    <div class="layout-menu-bar">

    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/public/header/index'
export default {
  components: {
    MyHeader
  }
}
</script>

