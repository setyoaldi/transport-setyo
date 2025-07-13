import { createRouter, createWebHistory } from "vue-router";
import { RouterNames } from "../constant/route";
const Home = () => import("../views/Ships.vue");
const ShipmentDetail = () => import("../views/DetailShipment.vue");
const NotFound = () => import("../views/NotFound.vue");

const router = createRouter({
  routes: [
    {
      path: "/",
      name: RouterNames.HOME,
      component: Home,
    },
    {
      path: "/shipment/:id",
      name: RouterNames.DETAIL_SHIPMENT,
      component: ShipmentDetail,
      props: true,
    },
    {
      path: "/:pathMatch(.*)",
      name: RouterNames.NOT_FOUND,
      component: NotFound,
    },
  ],
  history: createWebHistory(),
});

export default router;
