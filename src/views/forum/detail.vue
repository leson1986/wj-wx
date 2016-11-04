<template>

	<div class="respond">

		<div id="wrapper">

			<!--BIO TITLE-->
			<h2 id="titleName" class="sectionHead">Blog &amp; 学习札记</h2>

			<!--BIO-->
			<div id="bio" >
				<h2>{{ newsDetail.title }}</h2>

				<!--BIO PARAGRAPH-->
				<p class="moreText">
					<span v-html="newsDetail.content"></span>
					<a @click="backGo">
						Back
					</a>
				</p>

			</div><!--end bio-->

			<div class="clear"></div>

		</div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default{
		computed: {
			...mapGetters({
				newsDetail: 'getNewsDetail'
			})
		},

		mounted () {
			this.$store.dispatch('fetchNewsDetail', this.$route.params.id)
		},

		methods: {

			// 返回上一页 相当于history.go(-1)
			backGo () {
				this.$router.go(-1)
			}
		},

		data () {
			return{
				msg:'hello vue'
			}
		},

		components: {
		}
	}
</script>

<style>
#bio h2 {font-weight: 600;
	color: #444444;}
</style>