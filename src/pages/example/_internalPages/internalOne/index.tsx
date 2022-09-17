import { defineComponent } from "vue";
import { HomeContainer } from "./styles";
import AppRouter from "../../../../routes";
import { exampleParent } from "../../../../routes/example/exampleRoutes";

const InternalOne = defineComponent({
  setup() {
    const handleBack = () => {
      AppRouter.push({ path: `${exampleParent}/` });
    };

    return {
      handleBack,
    };
  },
  render() {
    return (
      <HomeContainer>
        <aTypographyTitle level={2}>Internal One</aTypographyTitle>
        <aTypographyTitle level={3}>
          This is internal page of exmaple!
        </aTypographyTitle>
        <aButton type="primary" onClick={this.handleBack}>
          Back to home example
        </aButton>
      </HomeContainer>
    );
  },
});

export default InternalOne;
