import React, {
  useEffect,
  useState,
  RefObject,
  useRef,
  ReactNode,
} from 'react';
import { Table, TableProps } from 'antd';

import type { ColumnsType } from 'antd/es/table';
import Style, { StyledProfile } from './style';
import images from '../../assets/images/index';
import color from '../../style/colors';
import { typeRanking } from '../../utils/types';
import { dataRanking as source } from '../../data';
import RankingTable from './components/ranking_table';
// import { getParticipant } from '../../firebase';

const Profile = (props: any) => {
  const user = props.user;
  const layout = (
    <StyledProfile className="text-color-primary d-flex flex-column justify-content-center align-items-center">
      <div className="container-img">
        <div className="user" style={{ backgroundImage: `url(${user.image})` }}>
          <img className="country" src={user.country} alt=""></img>
        </div>
      </div>
      <p className="name">{user.name}</p>
      <div className="d-flex justify-content-evenly">
        <div className="profile-info div-left d-flex flex-column justify-content-center align-items-center">
          <p className="number">{user.point}</p>
          <p className="text">Point</p>
        </div>
        <div className="profile-info div-right d-flex flex-column justify-content-center align-items-center">
          <p className="number">{user.solved}</p>
          <p className="text">Solved</p>
        </div>
      </div>
    </StyledProfile>
  );
  return layout;
};

const Ranking = () => {
  const [data, setData] = useState<typeRanking[]>(source);
  useEffect(() => {
    console.log('rendering...');
    const interval = setInterval(() => {
      getDataFromAxios();
    }, 0);
    return () => clearInterval(interval);
  }, [source]);
  const getDataFromAxios = async () => {
    try {
      // const data = await axios.get(BASE_URL);
      // setData(data);
      const sorted = source.sort(
        (a: typeRanking, b: typeRanking) => a.key - b.key
      );
      setData(sorted);
    } catch (err) {
      console.log(err);
    }
  };
  // getParticipant('competition1');
  return (
    <Style>
      <div className="container-profile">
        <div className="top-2 align-item-bottom">
          <Profile user={data[1]} />
        </div>
        <div className="top-1">
          <Profile user={data[0]} />
        </div>
        <div className="top-3 align-item-bottom">
          <Profile user={data[2]} />
        </div>
      </div>
      <div className="container">
        <RankingTable className="table" dataSource={data} />
      </div>
    </Style>
  );
};

export default Ranking;
