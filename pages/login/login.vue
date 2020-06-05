<template>
	<div id="login">
		<div v-show="selectLang" class="modal" @click="closeselect()"></div>
		<div class="form" v-if="login">
			<div class="modal" v-show="selectLang" @click="closeselect()"></div>
			<div class="header">
				<div class="modal" v-show="selectLang" @click="closeselect()"></div>
				<p>{{title}}</p>
				<div class="select">
					<p @click="selectLanguage()">{{language}}<image src="../../static/images/down.png"></image></p>
					<div class="languageList" v-if="selectLang">
						<div v-for="lang in languageList" :key="lang" @click="selectedL(lang)">{{lang}}</div>
					</div>
				</div>
			</div>
		    <div class="content">
				<div class="content-left">
					<image src="../../static/images/timg.png"></image>
					<image class="logo" src="../../static/images/logo.jpg" mode=""></image>
				</div>
				<div class="content-right">
					<!-- <form class="logo-form" @submit="" @reset=""> -->
						<div class="logo-form-item">
							<label for="username">用户名</label>
							<input class="logo-form-item-input" type="text" v-model="loginForm.username">
						</div>
						<div class="logo-form-item">
							<label for="username">密码</label>
							<input class="logo-form-item-input" password="true" type="text" v-model="loginForm.password">
						</div>
						<div class="logo-form-item">
							<label for="save"></label>
							<div class="save-password-out" @click="toSavePassword()">
								<image v-if="loginForm.savePassword" src="../../static/images/yes.png"></image>
							</div>保存密码
						</div>
						<div class="logo-form-item">
							<button class="logo-form-item-button" :disabled="disabled" @click="userLogin()">登录</button>
							<button class="logo-form-item-button" @click="telLoginP()">手机号登录</button>
						</div>
					<!-- </form> -->
				</div>
			</div>
		</div>
		<div class="tel-login" v-if="telLogin">
			<div class="login-tel">
				<label for="">电话号码</label>
				<input class="login-tel-telInput" type="text" v-model="loginForm.tel">
			</div>
			<div class="login-tel">
				<label for="">验证码</label>
				<input class="login-tel-telInput" type="text" v-model="loginForm.check">
				<button :disabled="sendNum === 1" class="login-tel-button" @click="getCheck()">{{sendMsg}}</button>
			</div>
			<div class="login-tel">
				<button class="login-tel-login" @click="telLoginP()">用户名登录</button>
				<button class="login-tel-login" @click="userLogin()">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "启奥软件",
				language: "简体",
				languageList: ['简体','英文'],
				selectLang: false,
				login: true,
				telLogin: false,
				time: 60,
				sendMsg: '发送验证码',
				sendNum: 0,
				loginForm: {
					username: "",
					password: "",
					savePassword: false,
					tel: "",
					check: ""
				},
				disabled: false
			}
		},
		methods: {
			selectLanguage() {
				this.selectLang = !this.selectLang;
			},
			closeselect() {
				this.selectLang = false;
			},
			selectedL(lang) {
				this.language = lang;
				this.selectLang = false;
			},
			telLoginP() {
				this.login = !this.login;
				this.telLogin = !this.telLogin;
			},
			getCheck() {
				var time = parseInt(this.time);
				if (time <= 0) {
					this.sendMsg = '发送验证码';
					this.sendNum = 0;
					this.time = 60;
					return false;
				}
				if (this.sendNum === 0) {
				   this.$api.adminService.sendCheck(this.loginForm).then(res => {
						console.log(res);
					})
				}
				this.time = parseInt(this.time) - 1;
				this.sendMsg = this.time;
				this.sendNum = 1;
				setTimeout(this.getCheck, 1000);
			},
			userLogin() {
				if (this.login) {
					if (!this.loginForm.username) {
						uni.showToast({
							title: '请输入用户名',
							duration: 2000,
							icon: 'none'
						});
						return;
					}
					if (!this.loginForm.password) {
						uni.showToast({
							title: '请输入密码',
							duration: 2000,
							icon: 'none'
						});
						return;
					}	
				} else {
					if (!this.loginForm.tel) {
						uni.showToast({
							title: '请输入电话号码',
							duration: 2000,
							icon: 'none'
						});
						return;
					}
					if (!this.loginForm.check) {
						uni.showToast({
							title: '请输入验证码',
							duration: 2000,
							icon: 'none'
						});
						return;
					}
				}
				console.log(this)
				this.$api.adminService.login(this.loginForm).then(res => {
					if (res) {
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
				})
				// axios.get('login', {params: this.loginForm}).then(res => {
				// 	console.log(res);
				// 	switch (res.data.status){
				// 		case 0:
				// 			uni.showToast({
				// 				title: '登陆成功',
				// 				duration: 2000,
				// 				icon: 'success'
				// 			});
				// 			uni.switchTab({
				// 				url: '/pages/index/index'
				// 			});
				// 			break;
				// 		case 1:
				// 			uni.showToast({
				// 				title: res.data.message,
				// 				duration: 2000,
				// 				icon: 'none'
				// 			});
				// 		case 2:
				// 			uni.showToast({
				// 				title: '密码错误',
				// 				duration: 2000,
				// 				icon: 'none'
				// 			});
				// 		default:
				// 			break;
				// 	}
				// })
				// if (this.loginForm.username !== 'admin' || this.loginForm.password !== 'Aa000000') {
				// 	uni.showToast({
				// 		title: '密码不正确',
				// 		duration: 2000,
				// 		icon: 'none'
				// 	});
				// 	return;
				// }
			},
			toSavePassword() {
				this.loginForm.savePassword = !this.loginForm.savePassword;
			}
		}
	}
</script>

<style scoped>
#login {
	height: 100vh;
	position: relative;
	background: #1183fb linear-gradient(-90deg, #0a48d1 0%, #1183fb 100%);
	background-color: #1183fb;
}
.save-password-out {
	width: 20px;
	height: 20px;
	border: 1px #C0C0C0 solid;
	border-radius: 3px;
	margin-right: 10px;
	position: relative;
}
.save-password-out > image {
	width: 15px;
	height: 15px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
.modal {
	width: 100%;
	/* z-index: 1000; */
	height: 100%;
	position: absolute;
}
.content {
	display: flex;
	height: 180px;
	width: calc(100% - 20px);
	/* background-color: #007AFF; */
	margin: 10px 0;
	padding: 10px;
	border-top: 1px #999999 solid;
}
.logo-form {
	padding: 0 10px;
}
.logo-form-item {
	width: 100%;
	height: 35px;
	padding: 5px;
	display: flex;
	font-size: 16px;
}
.logo-form-item > label {
	width: 50px;
	margin-right: 10px;
	line-height: 35px;
	font-size: 16px;
	font-weight: bold;
	text-align: right;
}
.logo-form-item > .logo-form-item-input {
	flex: 1;
	line-height: 35px;
	height: 35px;
	/* z-index: 1002; */
	font-size: 14px;
	border: 1px #C0C0C0 solid;
	padding: 0 10px;
}
.logo-form-item-button {
	height: 35px;
	line-height: 35px;
	background-color: #007AFF;
	color: #ffffff;
	border: 1px #007AFF solid;
	border-radius: 5px;
	margin: 0 auto;
	padding: 0 10px;
}
.content > .content-left {
	width: 80px;
	height: 100%;
	background-color: #ffffff;
}
.content > .content-left > image {
	width: 80px;
	height: 80px;
}
/* .content > .content-left > image.logo {
	height: 120px;
} */
.content > .content-right {
	flex: 1;
	height: 100%;
	/* background-color: #4CD964; */
}
.form {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 80%;
	height: 250px;
	background-color: #ffffff;
	border-radius: 5px;
	padding: 10px;
}
.tel-login {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 80%;
	height: 120px;
	background-color: #ffffff;
	border-radius: 5px;
	padding: 10px;
}
.tel-login button {
	height: 30px;
	border-radius: 5px;
}
.login-tel {
	width: 100%;
	height: 30px;
	display: flex;
	padding: 5px 0;
	font-size: 16px;
}
.login-tel > label {
	width: 80px;
	height: 100%;
	line-height: 30px;
}
.login-tel-telInput {
	flex: 1;
	height: 30px;
	line-height: 30px;
	border: 1px #808080 solid;
	border-radius: 15px;
	padding: 0 15px;
}
.login-tel-button {
	width: 100px;
	font-size: 14px;
	border: 1px #808080 solid;
	padding: 0 5px;
	line-height: 30px;
	margin-left: 10px;
}
.login-tel-login {
	margin: 0 auto;
	font-size: 14px;
	width: 48%;
	border: 1px #808080 solid;
	padding: 0 5px;
	line-height: 30px;
	background-color: #007AFF;
	color: #ffffff;
	margin: 0 auto;
}
.header {
	font-size: 24px;
	font-weight: bold;
	display: flex;
}
.header > p {
	flex: 1;
	line-height: 30px;
	text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
	padding-right: 20px;
}
.select {
	width: 80px;
	height: 28px;
	border: 1px #999999 solid;
	border-radius: 5px;
	font-size: 16px;
	font-weight: normal;
	position: relative;
	color: #666666;
	z-index: 1001;
	background-color: #FFFFFF;
}
.select > p {
	line-height: 28px;
	height: 28px;
	padding-left: 20px;
}
.select > p > image {
	width: 12px;
	height: 12px;
	margin-left: 5px;
}
.languageList {
	position: absolute;
	top: 30px;
	width: 40px;
	border: 1px #999999 solid;
	border-radius: 5px;
	padding: 10px 20px;
	background-color: #ffffff;
	z-index: 2000;
}
.languageList > div {
	width: 100%;
	height: 30px;
	display: inline-block;
	line-height: 30px;
}
</style>
