import { defineComponent } from "vue";
import { HomeContainer } from "./styles";
import AppRouter from "../../routes";
import { exampleParent } from "../../routes/example/exampleRoutes";

const Home = defineComponent({
  setup() {
    const handleBackToHome = () => {
      AppRouter.push({ path: "/home" });
    };
    const handleGoInternal = (route: string) => {
      AppRouter.push({ path: `${exampleParent}/${route}` });
    };

    return { handleBackToHome, handleGoInternal };
  },
  render() {
    return (
      <HomeContainer>
        <aTypographyTitle level={2}>Example page!</aTypographyTitle>
        <aTypographyText>Hey there, it's a example page</aTypographyText>
        <aButton type="primary" onClick={this.handleBackToHome}>
          Back to home
        </aButton>
        <aButton
          type="primary"
          onClick={() => this.handleGoInternal("internal-one")}
        >
          Go internal one
        </aButton>
        <aButton
          type="primary"
          onClick={() => this.handleGoInternal("internal-two")}
        >
          Go internal Two
        </aButton>
      </HomeContainer>
    );
  },
});

export default Home;
