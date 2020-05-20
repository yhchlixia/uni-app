<template>
	<div id="index-new">
		<div class="index-new">
			<div class="index-new-title">
				<label for="">最新动态</label>
			</div>
			<div class="inde-new-content">
				<div class="index-new-content-p" v-for="newT in newTs" :key="newT.title">
					<span>{{preTime(newT.time)}}</span>
					<div class="index-new-content-p-type">
						<div class="index-new-content-p-z" v-if="newT.type !== 0"></div>
						<div class="index-new-content-p-c" v-if="newT.type === 0">
							<div></div>
						</div>
					</div>
					<span>{{newT.username}} </span>
					<div class="index-new-content-p-active">
						<span v-if="newT.type === 0">创建</span>
						<span v-if="newT.type === 1">指派了</span>
						<span v-if="newT.type === 2">变更了</span>
						<span v-if="newT.type === 3">编辑了</span>
						<span v-if="newT.type === 4">解决了</span>
					</div>
					<div class="index-new-content-p-active">
						<span v-if="newT.jobType === 0">需求</span>
						<span v-if="newT.jobType === 1">任务</span>
						<span v-if="newT.jobType === 2">Bug</span>
					</div>
					<p class="index-new-content-p-title">{{newT.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var moment = require('moment');
	export default {
		data() {
			return {
				newTs: [
					{
						title: "1111111111111111111111111111111",
						time: "2020/05/19 12:00:00",
						type: 1,
						username: "yhch",
						jobType: 0
					},
					{
						title: "2222222222222222222222222222222",
						time: "6",
						type: 0,
						username: "闫宏超",
						jobType: 1
					},
					{
						title: "33333333333333333333333333333333",
						time: "8",
						type: 2,
						username: "yhch",
						jobType: 0
					},
					{
						title: "444444444444444444444444444444444",
						time: "5",
						type: 3,
						username: "yhch",
						jobType: 2
					},
					{
						title: "5555555555555",
						time: "4",
						type: 1,
						username: "yhch",
						jobType: 1
					},
					{
						title: "66666666666666",
						time: "3",
						type: 1,
						username: "yhch",
						jobType: 1
					},
					{
						title: "77777777777",
						time: "2",
						type: 2,
						username: "yhch",
						jobType: 0
					},
					{
						title: "88888888888888",
						time: "1",
						type: 4,
						username: "yhch",
						jobType: 0
					},
					{
						title: "88888888888888",
						time: "1",
						type: 0,
						username: "yhch",
						jobType: 1
					},
					{
						title: "89999999999",
						time: "1",
						type: 3,
						username: "yhch",
						jobType: 0
					},
					{
						title: "89",
						time: "1",
						type: 1,
						username: "yhch",
						jobType: 2
					}
				]
			}
		},
		created() {
			// this.loadData();
		},
		methods: {
			loadData() {
				this.newTs.forEach(ele => {
					
				})
			},
			preTime(time) {
				let format = "MM[月]DD[日] HH:MM";
				let t = moment();
				return t.format(format)
			}
		}
	}
</script>

<style>
.index-new {
	background-color: #ffffff;
	/* padding: 10px; */
	border-radius: 5px;
	margin-top: 10px;
	font-size: 18px;
}
.index-new-title {
	/* height: 40px; */
	font-weight: bold;
	background-color: #ffffff;
	position: sticky;
	top: 0px;
	padding: 10px;
}
.inde-new-content {
	height: 200px;
	background-color: #ffffff;
	overflow: scroll;
	overflow-x: hidden;
	padding: 0 10px 20px;
}
.index-new-content-p {
	height: 35px;
	line-height: 35px;
	font-size: 14px;
	display: flex;
}
</style>
