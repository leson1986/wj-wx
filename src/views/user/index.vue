<template>

	<div class="respond">

		<div id="wrapper">

			<!--BIO TITLE-->
			<h2 id="titleName" class="sectionHead">Leson Chan ls.c</h2>

			<!--BIO-->
			<div id="bio">
				<h2>这是一个很懒的家伙，总想着一劳永逸的活着</h2>

				<!--BIO PARAGRAPH-->
				<p class="moreText">
					Known as "THE MOLITOR", I'm a web designer and WordPress theme developer living in the outskirts of Seattle with my wife and two kids. I'm an active author on ThemeForest where I enjoy spending my day in Photoshop converting custom designs into fancy-pants
				</p>

				<br>
				<div class="moreText">
					<router-link to='/'>
						Back Home
					</router-link>
				</div>
				<div class="clear"></div>
			</div><!--end bio-->

			<div class="clear"></div>
		</div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default{
		computed: {
			...mapGetters({
				show: 'getLoading'
			})
		},

		data () {
			return{
				msg:'hello vue'
			}
		},

		methods: {
			loadingEv () {
				this.$store.dispatch('changeLoadingState', false)
			}
		},

		components: {
		}
	}
</script>

<style>

</style>