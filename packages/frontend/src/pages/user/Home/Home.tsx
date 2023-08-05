import Footer from '../../../components/footer/footer';
import Nav from '../Nav/Nav';
import { Switch } from 'antd';
import styled from 'styled-components';

import React from 'react';
import Slider1 from './Slider/Slider1';
import Slider from './Slider/Slider';
import Contents from './Content/Contents';
import Sponsors from './Sponsors/Sponsors';

const Slidemain = styled.div`
  height: 110vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  /* border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%; */
  background-color: #000;
  z-index: 9;
`;

const Homemain = styled.div`
  background-color: black;
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, 'sans-serif' !important;
`;
const Home = () => {
  return (
    <Homemain>
      <Nav />
      <div data-aos="fade-up" data-aos-duration="3000">
        <Slidemain>
          <Slider1 />
          <Slider />
        </Slidemain>
      </div>
      <Contents></Contents>
      <Sponsors />
      <div data-aos="fade-up" data-aos-duration="3000">
        <Footer />
      </div>
    </Homemain>
  );
};
export default Home;
