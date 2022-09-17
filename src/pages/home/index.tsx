import { defineComponent } from "vue";
import { HomeContainer } from "./styles";
import AppRouter from "../../routes";

const Home = defineComponent({
  setup() {
    const handleGoToExample = () => {
      AppRouter.push({ path: "/example" });
    };

    return {
      handleGoToExample,
    };
  },
  render() {
    return (
      <HomeContainer>
        <aTypographyTitle level={2}>
          Hello, welcome to vue 3 with TSX!
        </aTypographyTitle>
        <aTypographyText>
          Have a full power of javascript for make yout HTML templates with this
        </aTypographyText>
        <aButton type="primary" onClick={this.handleGoToExample}>
          Go Example page
        </aButton>
      </HomeContainer>
    );
  },
});

export default Home;
