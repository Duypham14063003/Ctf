import styled from 'styled-components';
import color from '../../style/colors';
export default styled.div`
  border-top: 1px solid var(--bs-gray-dark);
  padding-top: 3rem;
  background-color: ${color.main_bg_color};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${color.text_color};
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .sub-title {
    color: var(--primary-color);
    font-size: 0.85rem;
  }
  .other {
    margin-top: 2rem;
    column-gap: 1rem;
    span {
      &:hover {
        color: var(--primary-color);
        cursor: pointer;
      }
    }
  }
  .social {
    margin: 2.5rem 0;
    column-gap: 1rem;

    svg {
      font-size: 2.5rem;
      color: white;
      cursor: pointer;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  .copy-right {
    border-top: 1px solid var(--primary-color);
    padding: 2rem 0;
    text-align: center;
  }
`;
