import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Import your pages
import HomePage from "@/components/HomePage.vue";
import Quizgame from "@/components/Quizgame.vue";
import Timeline from "@/components/Timeline.vue";
import PhotosPage from "@/components/PhotosPage.vue";
import ReasonsPage from "@/components/ReasonsPage.vue";
import SurprisePage from "@/components/SurprisePage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quizgame,
  },
  { path: "/timeline", name: "Timeline", component: Timeline },
  {
    path: "/photos",
    name: "Photos",
    component: PhotosPage,
  },
  { path: "/reasons", name: "Reasons", component: ReasonsPage },
  { path: "/surprise", name: "Surprise", component: SurprisePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
