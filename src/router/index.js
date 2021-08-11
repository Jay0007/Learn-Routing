import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index"

Vue.use(VueRouter);

const routes = [{

    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    children: [{
      path: ":experienceslug",
      name: "ExperienceDetails",
      props: true,
      component: () =>
        import( /* webpackChunkName : "experiencedetails"*/ "../views/ExperienceDetails.vue")
    }],
    component: () =>
      import( /* webpackChunkName : "destinationdetails"*/ "../views/DestinationDetails.vue"),
    beforeEnter: (to, from, next) => {
      const exist = store.state.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exist) {
        next()
      } else {
        next({
          name: 'NotFound'
        })
      }
    }

  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    commponent: () => import( /* webpackChunkName : "notfound"*/ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
        if (document.querySelector(to.hash)) {
          return position
        }
        return false
      }
    }
  },
  routes,
});

export default router;