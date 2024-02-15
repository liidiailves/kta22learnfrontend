import "./style.scss";
import { createApp } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "./pages/Home.vue";
import ToDo from "./pages/ToDo.vue";
import Chat from "./pages/Chat.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/todo", component: ToDo, name: "ToDo" },
  { path: "/chat", component: Chat, name: "Chat" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

import App from "./App.vue";
const app = createApp(App);

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.mount("#app");
