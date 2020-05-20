<template>
	<div id="header">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "header"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
#header {
	background-color: #ffffff;
	height: 50px;
	width: 100%;
}
</style>
