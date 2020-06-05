import Request from "../request.js"
import toastService from "../pages/components/services/toast-service.js"

function login(params) {
	return Request({
		method: "get",
		url: "/login",
		params: params
	}).then(res => {
		const {
			status,
			data,
			message
		} = res;
		switch (status){
			case 0:
				toastService.i18n('success', message, 2000)
			    return data;
				break;
			case 1:
				toastService.i18n('none', message, 2000)
			    return;
				break;
			case 2:
				toastService.i18n('none', message, 2000)
			    return;
				break;
			default:
				toastService.i18n('none', '系统错误', 2000)
			    return;
				break;
		}
	})
}

function sendCheck(params) {
	return Request({
		method: 'get',
		url: '/sendCheck',
		params: params
	}).then(res => {
		const {
			status,
			data,
			message
		} = res;
		if(status === 0) {
			return data;
		}
	})
}

export default {
	login,
	sendCheck
}