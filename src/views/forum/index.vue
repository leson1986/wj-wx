<template>

	<div class="respond">

		<div id="wrapper">

			<!--Blog TITLE-->
			<h2 id="ribbon" class="sectionHead">Blog &amp; 学习札记</h2>

			<!--Blog-->
			<ul id="honorsAwards">

				<router-link tag="li" v-for="items in newsList.news" :to="{name: 'forum_detail', params: {id: items.id}}">
					{{ items.news_title }}
				</router-link>

			</ul><!--end Blog-->

			<br>
			<div class="moreText">
				<router-link to='/'>
					Back Home
				</router-link>
			</div>
			<div class="clear"></div>

		</div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default{
		computed: {
			...mapGetters({
				newsList: 'getNewsList'
			})
		},

		data () {
			return{
				msg:'hello vue'
			}
		},

		mounted () {
			this.$store.dispatch('fetchNewsList')
		},
		components: {
		}
	}
</script>

<style>

</style>