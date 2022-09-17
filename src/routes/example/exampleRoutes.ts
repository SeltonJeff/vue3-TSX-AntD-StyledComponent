import { RouteRecordRaw } from "vue-router";

import ExamplePage from "../../pages/example";
import InternalOne from "../../pages/example/_internalPages/internalOne";
import InternalTwo from "../../pages/example/_internalPages/internalTwo";

export const exampleParent = "/example";
export const ExampleRoutes: RouteRecordRaw[] = [
  { path: "/", component: ExamplePage },
  { path: "/internal-one", component: InternalOne },
  { path: "/internal-two", component: InternalTwo },
].map(({ path, ...attr }) => ({ path: `${exampleParent}${path}`, ...attr }));
