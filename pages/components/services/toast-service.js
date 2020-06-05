function i18n(type, message, timeout) {
	uni.showToast({
		title: message,
		duration: timeout,
		icon: type
	});
}

export default {
	i18n
}