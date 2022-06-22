import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SocialMedia from "../views/SocialMedia.vue";
import GalleryComponent from "../views/GalleryComponent.vue";
import PortraitsComponent from "../views/Gallery/PortraitsComponent.vue";
import WeddingComponent from "../views/Gallery/WeddingComponent.vue";
import CouplesComponent from "../views/Gallery/CouplesComponent.vue";
import MaternityComponent from "../views/Gallery/MaternityComponent.vue";
import ContactComponent from "../views/ContactComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/social",
    name: "social",
    component: SocialMedia,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryComponent,
  },
  {
    path: "/portraits",
    name: "portraits",
    component: PortraitsComponent,
  },
  {
    path: "/weddings",
    name: "weddings",
    component: WeddingComponent,
  },
  {
    path: "/couples",
    name: "couples",
    component: CouplesComponent,
  },
  {
    path: "/maternity",
    name: "maternity",
    component: MaternityComponent,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
