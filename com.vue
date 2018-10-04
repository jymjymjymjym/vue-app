<template>
  <div class="header-container">
    <mt-header fixed title="fixed top">dad</mt-header>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class=" mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/menber">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<style>
.header-container {
  padding-top: 40px;
  overflow-x: hidden;
}
.mint-header {
  background-color: blue;
}
.mint-header.is-fixed {
  z-index: 999999 !important;
}
header.mint-header {
  height: 40px;
}

.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.31s ease-in-out;
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


