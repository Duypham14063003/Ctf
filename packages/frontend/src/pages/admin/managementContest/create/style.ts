import images from 'packages/frontend/src/assets/images';
import color from 'packages/frontend/src/style/colors';
import styled from 'styled-components';

const Style = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-create {
    background-color: ${color.gray};
    border: none;
    border-radius: 5px;
    width: 90%;
    padding: 2em;
    margin: 0 0 5em;
    .ant-form-item .ant-form-item-label > label {
      color: ${color.btn_color}!important;
    }
    .btn {
      color: ${color.text_color};
      background: ${color.btn_color};
      position: relative;
      left: 90px;
    }
    .btn:hover {
      color: ${color.btn_color};
      a {
        color: ${color.btn_color};
      }
      background-color: ${color.text_color};
    }
    button span svg {
      vertical-align: baseline !important;
    }
  }
`;
export const StyleAuthor = styled.div`
  .dynamic-delete-button {
    position: relative;
    top: -2px;
    margin: 0 8px;
    color: #999;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
export default Style;
