import Vue from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Preview from './Preview.vue';

new Vue({
    el: '#preview',
    render: h => h(Preview),
});
