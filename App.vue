<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("pages/index/index.css");
	/*每个页面公共css */
	body {
		height: 100%;
		/* background: #1183fb linear-gradient(-90deg, #0a48d1 0%, #1183fb 100%); */
		/* background-color: #1183fb; */
	}
	uni-page-body, uni-page-refresh {
		height: 100%;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		color: #000000;
	}
	a:visited {
		color: #000000;
	}
	a:active {
		color: #000000;
	}
	a:link {
		color: #000000;
	}
</style>
