import styled from 'styled-components';
import color from '../../style/colors';
import { Drawer } from 'antd';
export default styled.div`
  background-color: ${color.main_bg_color};
  .is-scrolled {
    box-shadow: 0 8px 8px 0 rgba(103, 151, 255, 0.11),
      0 12px 18px 0 rgba(103, 151, 255, 0.11);
    border-bottom: 1px solid #f4f4f4 !important;
  }
  .header {
    position: fixed !important;
    padding: 0 5%;
    background-color: ${color.main_bg_color};
    align-items: center;
    z-index: 3;
    width: 100%;
    height: var(--height-header);
    &__logo {
      img {
        width: 100px;
      }
      cursor: pointer;
    }
  }
`;
