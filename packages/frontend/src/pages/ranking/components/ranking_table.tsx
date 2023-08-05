import { typeRanking } from 'packages/frontend/src/utils/types';
import { CircleProcess } from './style';
import color from 'packages/frontend/src/style/colors';
import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import Style from './style';
const BASE_URL = 'http://localhost:4200';
const RankingTable = (props: any) => {
  const [data, setData] = useState(props.dataSource);
  useEffect(() => {
    setData(props.dataSource);
  }, [props.dataSource]);
  const CircleProcessFunc = (level: number) => {
    let deg = (level / 100) * 360;
    return (
      <CircleProcess
        style={{
          backgroundImage: `conic-gradient(${color.btn_color} ${deg}deg, #fff 0deg)`,
        }}
      >
        <div className="circle">
          <p>{level}</p>
        </div>
      </CircleProcess>
    );
  };
  return (
    <Reorder.Group values={data} onReorder={setData}>
      <Style>
        <table className="table ">
          <thead className="table-header">
            <tr>
              <th scope="col" className="first-col">
                <p>Rank</p>
              </th>
              <th scope="col">
                <p>Name</p>
              </th>
              <th scope="col">
                <p>Country</p>
              </th>
              <th scope="col">
                <p>First Solved</p>
              </th>
              <th scope="col">
                <p>Point</p>
              </th>
              <th scope="col" className="last-col">
                <p>Level</p>
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {props.dataSource.map((data: typeRanking) => {
              return (
                <Reorder.Item
                  as="tr"
                  key={data.key}
                  value={data.key}
                  className="table-row"
                >
                  <td className="">
                    <p className="ranking text-color-primary d-flex justify-content-center align-items-center">
                      {data.key}
                    </p>
                  </td>
                  <td>
                    <div className="ranking-profile d-flex justify-content-center align-items-center">
                      <div>
                        <img className="img" src={data.image} alt="" />
                      </div>
                      <a
                        href="https://www.facebook.com/"
                        className="name flex-grow-1"
                      >
                        {data.name}
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="icon-flag">
                      <img src={data.country} alt="" />
                    </div>
                  </td>
                  <td className="content">{data.solved}</td>
                  <td className="content">{data.point}</td>
                  <td>{CircleProcessFunc(data.level)}</td>
                </Reorder.Item>
              );
            })}
          </tbody>
          <tfoot className="table-footer"></tfoot>
        </table>
      </Style>
    </Reorder.Group>
  );
};
export default RankingTable;
