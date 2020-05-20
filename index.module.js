import InputCheck from 'pages/components/input-check.vue';

function common(Vue) {
	if(common.installed) {
		return;
	}
	Vue.component("InputCheck", InputCheck);
}

export default common;