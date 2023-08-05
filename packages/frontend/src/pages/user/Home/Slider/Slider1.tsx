import React, { Component } from 'react';
import Style from './slider2';
const Slider1 = () => {
  console.log('done slider 2');
  return (
    <div
      data-aos="fade-up"
      className="slide2"
      style={{
        paddingTop: '30px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        scale: '1.6',
      }}
    >
      <Style>
        <div className="planet">
          <div className="r1" />
          <div className="r2" />
          <div className="r3" />
          <div className="r4" />
          <div className="r5" />
          <div className="r6" />
          <div className="r7" />
          <div className="r8" />
          <div className="shad" />
        </div>
        <div className="stars">
          <div className="s1" />
          <div className="s2" />
          <div className="s3" />
          <div className="s4" />
          <div className="s5" />
          <div className="s6" />
        </div>
        <div className="an">
          <div className="tank" />
          <div className="astro">
            <div className="helmet">
              <div className="glass">
                <div className="shine" />
              </div>
            </div>
            <div className="dress">
              <div className="c">
                <div className="btn1" />
                <div className="btn2" />
                <div className="btn3" />
                <div className="btn4" />
              </div>
            </div>
            <div className="handl">
              <div className="handl1">
                <div className="glovel">
                  <div className="thumbl" />
                  <div className="b2" />
                </div>
              </div>
            </div>
            <div className="handr">
              <div className="handr1">
                <div className="glover">
                  <div className="thumbr" />
                  <div className="b1" />
                </div>
              </div>
            </div>
            <div className="legl">
              <div className="bootl1">
                <div className="bootl2" />
              </div>
            </div>
            <div className="legr">
              <div className="bootr1">
                <div className="bootr2" />
              </div>
            </div>
            <div className="pipe">
              <div className="pipe2">
                <div className="pipe3" />
              </div>
            </div>
          </div>
        </div>
      </Style>
    </div>
  );
};

export default Slider1;
