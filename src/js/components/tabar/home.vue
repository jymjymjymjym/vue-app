<template>
    <div>
    <my-swiper :auto="-1">
      <my-swipeItem><div class="d d1">1</div></my-swipeItem>
      <my-swipeItem><div class="d d2">2</div></my-swipeItem>
      <my-swipeItem><div class="d d3">3</div></my-swipeItem>
      <my-swipeItem><div class="d d4">4</div></my-swipeItem>
    </my-swiper>

    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
		</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
.d {
  height: 200px;
  font-size: 36px;
  padding: 10px;
}
.d1 {
  background-color: red;
}
.d2 {
  background-color: blue;
}
.d3 {
  background-color: grey;
}
.d4 {
  background-color: green;
}
.mui-grid-view.mui-grid-9{
  background-color: pink;
  margin: 0;
}
.mui-content > .mui-table-view:first-child{
  margin: 0;
}
</style>
