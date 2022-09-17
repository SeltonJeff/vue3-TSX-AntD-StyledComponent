import styled from "vue3-styled-components";
import { PageHeader } from "ant-design-vue";

export const HeaderContainer = styled(PageHeader)`
  padding: 0 30px;
  background: var(--primary-dark);
  justify-content: space-between;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);

  .ant-page-header-content {
    padding: 0;

    & > * {
      height: 60px;
      display: flex;
      align-items: center;
      color: var(--white);
    }
  }
`;
