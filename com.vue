<template>
  <div>
    <a href="#">哈哈哈{{dms}}</a>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button> 
  </div>
</template>

<style>
a {
  color: red;
}
</style>

<script>
export default {
  data() {
    return {
      dms: "组件中的data"
    };
  }
};
</script>


