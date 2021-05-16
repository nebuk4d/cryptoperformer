import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const app = createApp(App);
app.use(store);
app.use(PrimeVue);
app.component("InputText", InputText);
app.component("Button", Button);
app.mount("#app");
