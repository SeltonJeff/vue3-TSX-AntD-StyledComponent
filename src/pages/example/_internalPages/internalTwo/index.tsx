import { defineComponent } from "vue";
import { HomeContainer } from "./styles";
import AppRouter from "../../../../routes";
import { exampleParent } from "../../../../routes/example/exampleRoutes";
import { useRouter } from "vue-router";

const InternalTwo = defineComponent({
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  render() {
    return (
      <HomeContainer>
        <aTypographyTitle level={2}>Internal Two</aTypographyTitle>
        <aTypographyTitle level={3}>
          This is internal page of exmaple!
        </aTypographyTitle>
        <aButton
          type="primary"
          onClick={() => this.router.push({ path: `${exampleParent}/` })}
        >
          Back to home example
        </aButton>
      </HomeContainer>
    );
  },
});

export default InternalTwo;
