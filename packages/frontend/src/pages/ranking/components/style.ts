import color from 'packages/frontend/src/style/colors';
import styled from 'styled-components';
export const CircleProcess = styled.div`
  width: 3em;
  height: 3em;
  position: relative;
  border-radius: 50%;
  margin: 0.5em 0;
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: ${color.black_blue_color};
    border-radius: 50%;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`;
const Style = styled.div`
  .table {
    border-radius: 10px;
    color: ${color.text_color};
    background-color: ${color.black_blue_color};
    margin-bottom: 5em;
    /* border: 1px solid ${color.text_color}; */
    .table-header {
      border-radius: 10px;
      height: 3em;
      th {
        line-height: 2em;
        font-weight: 400;
        color: ${color.btn_color};
        p {
          margin: auto 0;
          width: 100%;
          border-right: 1px solid white;
        }
      }
      .last-col p {
        border: none;
      }
    }
    .table-row {
      transition: background-color 0.4s ease;
      height: 5em;
      .ranking {
        margin: 0;
        height: 4em;
        font-size: 15px;
      }
      .icon-flag {
        width: 3em;
        height: 4em;
        display: flex;
        align-items: center;
        img {
          border: 3px solid ${color.btn_color};
          border-radius: 50%;
          width: 100%;
          height: auto;
        }
      }
      .ranking-profile {
        width: 100%;
        .name {
          margin: auto 1em;
          color: ${color.btn_color};
        }
        div {
          width: 4em;
          height: 4em;
          img {
            border: 3px solid ${color.btn_color};
            border-radius: 50%;
            width: 100%;
            height: auto;
          }
        }
      }
      .content {
        line-height: 4em;
      }
    }
    .table-row:hover {
      cursor: pointer;
      background-color: ${color.table_color_hover};
    }
    .table-footer {
      height: 4em;
    }
  }
`;
export default Style;
