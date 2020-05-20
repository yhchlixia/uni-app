<template>
	<div id="index">
		<div class="index-header">
			<div class="index-header-tab">
				<div class="index-header-tab-button" v-for="tab in tabs" :key="tab.id" @click="selectGN(tab.id)" :class="{'index-selected':showGN === tab.id}">
					{{tab.text}}
				</div>
			</div>
		</div>
		<div class="index-content">
			<div class="index-content-out">
				<div v-if="showGN === 0">
					<index></index>
					<!-- <InputCheck maxlength="11" required="true" :title="title" :pattern="/^[0-9a-zA-Z_-]+$/" minlength="11"></InputCheck> -->
				</div>
				<div v-if="showGN === 1">
					1
				</div>
				<div v-if="showGN === 2">
					2
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import index from "../components/index/index.vue"
	export default {
		components: {
			index,
		},
		data() {
			return {
				title: 'tel',
				tabs: [
					{
						text: "首页",
						id: 0,
					},{
						text: "任务",
						id: 1,
					},{
						text: "bug",
						id: 2,
					},{
						text: "需求",
						id: 3,
					},{
						text: "项目",
						id: 4,
					},{
						text: "动态",
						id: 5,
					},{
						text: "档案",
						id: 6,
					},{
						text: "密码",
						id: 7,
					}
				],
				showGN: 0
			}
		},
		onLoad() {

		},
		methods: {
			selectGN(id) {
				this.showGN = id;
			}
		}
	}
</script>

<style>
#index {
	width: 100%;
	height: 100%;
	background-color: #efefef;
}
</style>
