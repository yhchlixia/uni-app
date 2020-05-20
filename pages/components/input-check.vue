<template>
	<div id="input" :class="{'has-error':error}">
		<input type="text" v-model="title" @change="toCheck(pattern, title)">
		<small v-show="error">
			<div v-show="requiredError" class="error-message">请输入电话号码</div>
			<div v-show="patternError" class="error-message"></div>
			<div v-show="maxlengthError" class="error-message">电话号码长度最大为{{maxlength}}位</div>
			<div v-show="minlengthError" class="error-message">电话号码长度最小为{{minlength}}位</div>
			<div v-show="existError" class="error-message">电话号码不能相同</div>
		</small>
	</div>
</template>

<script>
	export default {
		name: "inputCheck",
		props: {
			required: String,
			pattern: RegExp,
			exist: String,
			maxlength: String,
			minlength: String
		},
		data() {
			return {
				msg: "hello world123",
				error: false,
				title: "",
				requiredError: false,
				patternError: false,
				maxlengthError: false,
				minlengthError: false,
				existError: false,
			}
		},
		methods: {
			toCheck(pattern, title) {
				console.log(this.maxlength);
				if(!title) {
					this.error = true;
					this.requiredError = true;
					this.patternError = false;
					this.maxlengthError = false;
					this.minlengthError = false;
					this.existError = false;
					return;
				} else {
					this.error = false;
					this.requiredError = false;
				}
				if(!pattern.test(title)) {
					this.error = true;
					this.patternError = true;
					this.maxlengthError = false;
					this.minlengthError = false;
					this.existError = false;
					return;
				} else {
					this.error = false;
					this.patternError = false;
				}
				if(title.length > this.maxlength) {
					this.error = true;
					this.maxlengthError = true;
					this.minlengthError = false;
					this.existError = false;
					return;
				} else {
					this.error = false;
					this.maxlengthError = false;
				}
				if(title.length < this.minlength) {
					this.error = true;
					this.minlengthError = true;
					this.existError = false;
					return;
				} else {
					this.error = false;
					this.minlengthError = false;
				}
				if(this.exist) {
					this.error = true;
					this.existError = true;
					return;
				} else {
					this.error = false;
					this.existError = false;
				}
			}
		}
	}
</script>

<style>
#input {
	width: 100%;
	height: 100%;
}
#input > input {
	border: 1px #999999 solid;
}
#input.has-error {
	color: #ff0000;
}
#input.has-error > input {
	border: 1px #ff0000 solid;
}
#input.has-error > .error-message {
	font-size: 12px;
	height: 20px;
	width: 100%;
}
</style>
