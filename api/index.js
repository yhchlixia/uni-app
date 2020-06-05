import adminService from "./admin-service.js"
const apiObj = {
	adminService
}
const install = function(Vue) {
	if(install.installed) return;
	install.installed = true;
	Object.defineProperties(Vue.prototype, {
		$api: {
			get() {
				return apiObj;
			}
		}
	})
}
export default {
	install
};