import "./assets/scss/main.scss";
import { defineComponent } from "vue";
import {} from "vue-router";

import DefaultLayout from "./layouts/default";

const App = defineComponent({
  setup() {},
  render() {
    return (
      <>
        <DefaultLayout />
      </>
    );
  },
});

export default App;
