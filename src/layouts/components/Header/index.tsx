import { defineComponent } from "vue";
import { HeaderContainer } from "./styles";

const Header = defineComponent({
  setup() {},
  render() {
    return (
      <HeaderContainer>
        <aTypographyText>I'm App Header</aTypographyText>
      </HeaderContainer>
    );
  },
});

export default Header;
