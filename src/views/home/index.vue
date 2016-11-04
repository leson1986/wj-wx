<template>

	<div class="respond">

	<div id="wrapper">

		<!--BIO TITLE-->
		<h2 id="titleName" class="sectionHead">Leson Chan :: ls.c</h2>

		<!--BIO-->
		<div id="bio">
			<h2>一个做前端，但又会点后端的家伙</h2>

			<!--BIO PARAGRAPH-->
			<p class="moreText">
				<span v-html="homeInfoData.info"></span>
			</p>

		</div><!--end bio-->

		<div class="clear"></div>

		<!--SKILLS TITLE-->
		<h2 id="tools" class="sectionHead">Skills &amp; 技能介绍</h2>

		<!--SKILLS-->
		<ul id="skills" class="ready">
			<!--////////////////////////////////////////////////////////////////////////////////////-->
			<!--Notice the class names indicate the % of your skills. i.e. s70 = 70%, s40 = 40% etc. -->
			<!--////////////////////////////////////////////////////////////////////////////////////-->
			<li id="skill1" class="s80" style="right: 0%;"><span style="display: inline;">Vuejs2 + Vuex2 + router2</span></li>
			<li id="skill2" class="s70" style="right: 0%;"><span style="display: inline;">PHP</span></li>
			<li id="skill3" class="s90" style="right: 0%;"><span style="display: inline;">HTML + CSS</span></li>
			<li id="skill4" class="s90" style="right: 0%;"><span style="display: inline;">jQuery</span></li>
			<li id="skill7" class="s90" style="right: 0%;"><span style="display: inline;">zepto</span></li>
			<li id="skill5" class="s90" style="right: 0%;"><span style="display: inline;">Photoshop</span></li>
			<li id="skill6" class="s60" style="right: 0%;"><span style="display: inline;">SEO</span></li>
			<li id="skill8" class="s50" style="right: 0%;"><span style="display: inline;">Other</span></li>
		</ul><!--end skills-->

		<div class="clear"></div>


		<!--Blog TITLE-->
		<h2 id="ribbon" class="sectionHead">Blog &amp; 学习札记</h2>

		<!--Blog-->
		<ul id="honorsAwards">
			<router-link tag="li" v-for="items in homeInfoData.news" :id="items.id" :to="{name: 'forum_detail', params: {id: items.id}}">
				{{ items.news_title }}
			</router-link>
		</ul><!--end Blog-->

		<br>
		<div class="moreText">
			<router-link to='/forum'>
				More Blog
			</router-link>
		</div>
		<div class="clear"></div>

		<!--Contact Me TITLE-->
		<h2 id="chat" class="sectionHead">Contact Me</h2>

		<!--Contact Me-->
		<ul id="recommends">

			<li><h3>QQ: 511539312</h3></li>

			<li>
				<div class="details">
					<h3>交流QQ</h3>
				</div>
				<p>主要使用于学习交流，工作沟通</p>
			</li>

			<li><h3>WX: 511539312</h3></li>

			<li>
				<div class="details">
					<h3>微信Let's good</h3>
				</div>
				<p>主要用于工作沟通或交友</p>
			</li>

			<li><h3>邮箱：cls-leson@163.com</h3></li>

			<li>
				<div class="details">
					<h3>邮箱E-mail</h3>
				</div>
				<p>大型文件收发，也方便经常使用邮箱沟通的友仁们</p>
			</li>

		</ul><!--end Contact Me-->

		<div class="clear"></div>

	</div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default{
		computed: {
				...mapGetters({
					homeInfoData: 'getHomeInfoData'
				})
		},

	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		mounted () {
			this.$store.dispatch('fetchHomeInfoData')
		},

		components: {
		}
	}
</script>

<style>

</style>