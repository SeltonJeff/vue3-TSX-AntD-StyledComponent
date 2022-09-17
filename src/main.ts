import { createApp } from "vue";
import App from "./App";
import AppRouter from "./routes";
import Antd from "ant-design-vue";

const app = createApp(App);

app.use(AppRouter);
app.use(Antd);

app.mount("#app");
