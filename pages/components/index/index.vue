<template>
	<div id="index-index">
		<div class="index-index-my">
			<div class="index-time">
				<span>{{time}}</span>今日剩余工作总计
			</div>
			<div class="index-job">
				<div class="index-job-item" v-for="job in myJob" :key="job.id">
					<p>{{job.title}}</p>
					<p class="index-job-item-number"><a :href="job.url">{{job.number}}</a></p>
					<div class="index-job-item-error">
						<div class="index-job-item-error-show" v-show="job.postponementNum">
							已延期{{job.postponementNum}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<index-new></index-new>
	</div>
</template>
<script>
	import indexNew from "./index-new.vue"
	export default {
		components: {
			indexNew,
		},
		data() {
			return {
				msg: "hello World",
				time: "",
				myJob: []
			}
		},
		created() {
			var moment = require('moment');
			this.time = moment().format('YYYY[年]MM[月]DD[日]');
			this.loadData();
		},
		methods: {
			loadData() {
				this.myJob = [
					{
						id: 0,
						title: "我的任务",
						number: 4,
						url: "",
					},
					{
						id: 1,
						title: "我的BUG",
						number: 0,
						url: "",
					},
					{
						id: 2,
						title: "我的需求",
						number: 2,
						url: "",
					},
					{
						id: 3,
						title: "未关闭的项目",
						number: 5,
						url: "",
						postponementNum: 3
					},
					{
						id: 4,
						title: "未关闭的产品",
						number: 3,
						url: "",
					}
				]
			}
		}
	}
</script>
<style>
.index-index-my {
	background-color: #ffffff;
	border-radius: 5px;
	padding: 10px;
}
</style>
