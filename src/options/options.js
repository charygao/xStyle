import Vue from 'vue';
import App from './App';
import browser from 'webextension-polyfill';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import './options.scss';

Vue.use(VueMaterial);
new Vue({
	el: '#app',
	render: h => h(App)
});