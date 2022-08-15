import VueRouter from 'vue-router'
import ContentfulComponent from '../components/ContentfulComponent.vue'
import CartComponent from '../components/CartComponent.vue';
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'ContentfulComponent',
    component: ContentfulComponent
  },
  {
    path: '/cart',
    name: 'CartComponent',
    component: CartComponent
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router