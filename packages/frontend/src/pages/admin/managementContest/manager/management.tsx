import React, { useEffect, useRef, useState } from 'react';
import { Button, Divider, Input, Space, Table, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Style, {
  Search,
  Write,
  NewContestBtn,
  StyledModalDelete,
} from './style';
import { PlusOutlined, WarningOutlined } from '@ant-design/icons';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { typeContest } from '../../../../utils/types';
import { dataContest as source } from '../../../../data/index';
import Countdown from 'react-countdown';
import color from 'packages/frontend/src/style/colors';
const DeleteModal = (props: any) => {
  const openNotification = () => {
    notification.success({
      message: 'Deleted',
    });
    props.setShowElement(false);
    console.log('delete');
  };
  const handleCancer = () => {
    props.setShowElement(false);
  };
  return (
    <StyledModalDelete>
      <div className="alert-delete">
        <h2>Delete contest</h2>
        <div className="d-flex content">
          <WarningOutlined className="icon-warning d-flex justify-content-center align-items-center" />
          <div>
            <p>Are you sure you want to delete this?</p>
            <p>You can't undo this action!</p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Button className="btn-cancel" onClick={handleCancer}>
            Cancel
          </Button>
          <Button
            type="primary"
            danger
            className="btn-delete"
            onClick={() => openNotification()}
          >
            Delete
          </Button>
        </div>
      </div>
    </StyledModalDelete>
  );
};

const Management = () => {
  const [showElement, setShowElement] = useState(false);
  const handleDelete = () => {
    setShowElement(true);
  };
  const columns: ColumnsType<typeContest> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // width: '30%',
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors',
      // width: '15%',
      render: (_, { authors }) => (
        <Write>
          {authors.map((author, index) => {
            return <a key={index}>{author}</a>;
          })}
        </Write>
      ),
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      // width: '5%',
    },
    {
      title: 'Start',
      dataIndex: 'start',
      key: 'start',
      // width: '10%',
    },
    {
      title: 'Time remaining',
      dataIndex: 'start',
      key: 'start',
      render: (_, { start }) => {
        const timeStart = new Date(start);
        const Completionist = () => (
          <span style={{ color: color.btn_color }}>Active</span>
        );

        return (
          <Countdown date={timeStart.getTime()}>
            <Completionist />
          </Countdown>
        );
      },
    },
    {
      title: 'Registered',
      dataIndex: 'registered',
      key: 'registered',
      // width: '10%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button className="btn">View</Button>
          <Button className="btn" onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState<typeContest[]>(source);

  const handleNewContest = () => {
    let id: string = '1';
    const url = '/admin/new/contest/' + id;
    window.location.href = url;
  };
  return (
    <Style>
      <div className="container">
        {showElement && <DeleteModal setShowElement={setShowElement} />}
        <div className="d-flex flex-row justify-content-between">
          <NewContestBtn>
            <Button className="btn btn-new-contest" onClick={handleNewContest}>
              New contest
              <PlusOutlined className="icon-new-btn" />
            </Button>
          </NewContestBtn>
          <Search>
            <Space.Compact
              className="container-search"
              style={{ width: '100%' }}
            >
              <Input placeholder="Search" />
              <Button className="btn" type="primary">
                Search
              </Button>
            </Space.Compact>
          </Search>
        </div>
        <Table
          className="table"
          columns={columns}
          dataSource={source.map((data, index) => ({ ...data, key: index }))}
          rowKey="Id"
        />
      </div>
    </Style>
  );
};

export default Management;
