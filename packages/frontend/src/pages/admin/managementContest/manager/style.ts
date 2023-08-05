import styled from 'styled-components';
import color from 'packages/frontend/src/style/colors';
import images from 'packages/frontend/src/assets/images';
export const Write = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${color.light_orange}!important;
  }
`;
export const Search = styled.div`
  /* width: 50%; */

  display: flex;
  flex-direction: row-reverse;
`;
export const NewContestBtn = styled.div`
  /* width: 50%; */
  .btn {
    /* width: 100%; */
    display: flex;
    align-items: center;
    .icon-new-btn {
    }
  }
`;
export const StyledModalDelete = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .alert-delete {
    padding: 2em;
    width: 30%;
    min-width: 26em;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: ${color.text_color};
    border-radius: 5px;
    background-color: ${color.main_bg_color};
    h2 {
      color: ${color.btn_color};
    }
    .content {
      margin: 1em 0;
      .icon-warning {
        font-size: 3em;
        margin: -6% 4% 0;
        color: var(--red-color);
      }
    }
    .btn-delete {
    }
    .btn-cancel {
      margin: 0 1em;
    }
  }
`;
const Style = styled.div`
  background: ${color.main_bg_color};
  /* background: ${color.main_bg_color} url(${images.background}) no-repeat left
    top; */
  background-size: 150% 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  .container {
    width: 90%;
    min-width: 62em;
    .container-search {
      margin-bottom: 1em;
      width: 20em !important;
      justify-items: end;
    }
    .table {
      border: 1px solid ${color.text_color};
      border-radius: 5px;
      color: ${color.text_color};
      background-color: ${color.black_blue_color};
      .ant-table-thead th {
        color: ${color.btn_color};
        background-color: ${color.transparent_color};
      }
      .ant-table {
        border: 1px solid ${color.table_color};
        color: ${color.text_color};
        background-color: ${color.transparent_color};
      }

      .ant-pagination-item a {
        color: ${color.text_color};
      }
      .ant-pagination-item-link {
        color: ${color.text_color};
      }
    }
    .btn,
    .ant-pagination-item {
      background-color: ${color.btn_color};
      border: none;
      a {
        color: ${color.text_color};
      }
    }
    .btn:hover,
    .ant-pagination-item:hover {
      color: ${color.btn_color};
      a {
        color: ${color.btn_color};
      }
      background-color: ${color.text_color};
    }
  }
`;
export default Style;
