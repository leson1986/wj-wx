<template>
  <div id="app">

	  <router-view></router-view>
	  <!--<div class="mint-tabbar consult-tabbar-box">
		  <router-link to='/' class="mint-tab-item is-selected">

			  <span class="mint-tab-item-icon"></span>
			  <div class="mint-tab-item-label">在线门诊</div>
		  </router-link>
		  <router-link to='/forum' class="mint-tab-item">

			  <span class="mint-tab-item-icon"></span>
			  <div class="mint-tab-item-label">我的医生</div>
		  </router-link>
		  <router-link to='/user' class="mint-tab-item">

			  <span class="mint-tab-item-icon"></span>
			  <div class="mint-tab-item-label">个人中心</div>
		  </router-link>
	  </div>-->

	  <div id="nprogress">
		  <div class="spinner" role="spinner" v-show="loading">
			  <div class="spinner-icon"></div>
		  </div>
	  </div>
  </div>

</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		components: {
		},
		computed: mapGetters({
			loading: 'getLoading'
		})
	}
</script>

<style>

	@import 'assets/css/style.css';

	body{
		background-color: #ebebeb;
	}
	*{
		box-sizing: border-box;
	}
	img{
		width: 100%; transition: all 1.2s ease; opacity: 1;
	}
	@-webkit-keyframes nprogress-spinner {
		0%   { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}
	@keyframes nprogress-spinner {
		0%   { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	#nprogress {
		pointer-events: none;
	}
	#nprogress .spinner {
		display: block;
		position: fixed;
		z-index: 1031;
		top: 15px;
		right: 15px;
	}
	#nprogress .spinner-icon {
		width: 18px;
		height: 18px;
		box-sizing: border-box;
		border: solid 2px transparent;
		border-top-color: #29d;
		border-left-color: #29d;
		border-radius: 50%;
		-webkit-animation: nprogress-spinner 400ms linear infinite;
		animation: nprogress-spinner 400ms linear infinite;
	}
</style>
