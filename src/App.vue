<template>
  <div id="app">

	  <router-view></router-view>
	  <router-link tag="div" to="/foo">
		  div
	  </router-link><router-link tag="li" to="/foo">
	  li
  </router-link><router-link tag="span" to="/foo">
	  span
  </router-link>
	  <div class="mint-tabbar consult-tabbar-box">
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
		 <!-- <a class="mint-tab-item is-selected">
			  <span class="mint-tab-item-icon"></span>
			  <div class="mint-tab-item-label">在线门诊</div>
		  </a>
		  <a class="mint-tab-item">
			  <span class="mint-tab-item-icon"></span>
			  <div class="mint-tab-item-label">我的医生</div>
		  </a>
		  <a class="mint-tab-item">
			  <span class="mint-tab-item-icon"></span>
			  <div class="mint-tab-item-label">个人中心</div>
		  </a>-->
	  </div>
  </div>

</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>

	@import 'assets/css/common.css';
	.mint-tab-item {
		display: block;
		padding: 7px 0;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1
	}

	.mint-tab-item-icon {
		width: 24px;
		height: 24px;
		margin: 0 auto 5px
	}

	.mint-tab-item-icon:empty {
		display: none
	}

	.mint-tab-item-icon>* {
		display: block;
		width: 100%;
		height: 100%
	}

	.mint-tab-item-label {
		color: inherit;
		font-size: 12px;
		line-height: 1
	}

	.mint-tabbar {
		position: relative;
		background-color: #fafafa;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		right: 0;
		bottom: 0;
		left: 0;
		position: absolute;
		text-align: center
	}

	.mint-tabbar>.mint-tab-item.is-selected {
		background-color: #eaeaea;
		color: #26a2ff
	}

	.mint-tabbar:after {
		color: #d9d9d9;
		content: " ";
		width: 100%;
		height: 1px;
		border-top: 1px solid;
		top: 0;
		left: 0;
		position: absolute;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0
	}

	@media screen and (-webkit-min-device-pixel-ratio: 2) {
		.mint-tabbar:after {
			-webkit-transform:scaleY(.5);
			transform: scaleY(.5)
		}
	}

	.mint-tabbar.is-fixed {
		right: 0;
		bottom: 0;
		left: 0;
		position: fixed;
		z-index: 1
	}

	.consult-tabbar-box>.mint-tab-item{background-color: #fff;}
	.consult-tabbar-box>.mint-tab-item.is-selected{background-color: #fff;color: #1faa2b;}
	.consult-tabbar-box>.mint-tab-item.is-selected .mint-tab-item-label{color: #1faa2b;}
	.consult-tabbar-box>.mint-tab-item .mint-tab-item-icon{background: url(assets/img/index-nav.png) no-repeat;background-size: 75px auto;display: inline-block;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(2) .mint-tab-item-icon{background-position:-26px 0;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(3) .mint-tab-item-icon{background-position:-53px 0;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(1).is-selected .mint-tab-item-icon{background-position:0 -28px;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(2).is-selected .mint-tab-item-icon{background-position:-26px -28px;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(3).is-selected .mint-tab-item-icon{background-position:-53px -28px;}

</style>
