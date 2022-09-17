import { defineComponent, resolveDynamicComponent, Transition } from "vue";
import Header from "../components/Header";

const DefaultLayout = defineComponent({
  setup() {
    const pagesTransition = (view: any) => (
      <Transition name="fade">
        {resolveDynamicComponent(view.Component)}
      </Transition>
    );

    return { pagesTransition };
  },
  render() {
    return (
      <aLayout>
        <aLayout>
          <Header />
          <aLayoutContent>
            <routerView vSlots={this.pagesTransition} />
          </aLayoutContent>
        </aLayout>
      </aLayout>
    );
  },
});

export default DefaultLayout;
