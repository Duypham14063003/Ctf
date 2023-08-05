import React, { useState } from 'react';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import { useParams } from 'react-router';
import Style, { StyleAuthor } from './style';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const Author = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <StyleAuthor>
      <Form.List name="names">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Author' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input Author's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="Author name" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 0 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => {
                      console.log(field.name);
                      remove(field.name);
                    }}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                className="btn"
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add Author
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </StyleAuthor>
  );
};
const Level = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  const [row, setRow] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <StyleAuthor>
      <Form.List name="Level">
        {(fields, { add, remove }, { errors }) => (
          <>
            <Form.Item label="Level">
              <Input
                type="number"
                value={value}
                onChange={(e: any) => {
                  let valueChange = parseInt(e.target.value);
                  if (valueChange < 0) {
                    valueChange = 0;
                    setValue(0);
                    return;
                  } else setValue(valueChange);
                  const valueFinal = valueChange - row;
                  console.log(valueFinal, valueChange);

                  let adding = valueFinal > 0 ? valueFinal : 0,
                    deleting = valueFinal < 0 ? valueFinal * -1 : 0;
                  const tmpDel = deleting;
                  while (adding > 0) {
                    add();
                    adding--;
                  }
                  while (deleting > 0) {
                    remove(row - (tmpDel - deleting) - 1);
                    deleting--;
                  }
                  setRow(Number.isNaN(valueChange) ? row : valueChange);
                }}
                style={{ width: '60%' }}
              />
              <Form.ErrorList errors={errors} />
            </Form.Item>
            {fields.map((field, index) => (
              <>
                <Form.Item
                  label={'Level ' + (index + 1)}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: 'Please input key or delete this field.',
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="Key" style={{ width: '60%' }} />
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Suggestion" required={false} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    noStyle
                  >
                    <Input
                      placeholder="Suggestion (Optional)"
                      style={{ width: '60%' }}
                    />
                  </Form.Item>
                </Form.Item>
              </>
            ))}
          </>
        )}
      </Form.List>
    </StyleAuthor>
  );
};
const CreateContest = () => {
  const url = useParams();
  const [data, setData] = useState();
  return (
    <Style>
      <Form
        className="form-create"
        {...formItemLayoutWithOutLabel}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Author />
        <Form.Item label="Duration">
          <TimePicker format="HH:mm:ss" />
        </Form.Item>
        <Form.Item label="Time Start">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={8} />
        </Form.Item>
        <Level />
        <Form.Item>
          <Button className="btn">Submit</Button>
        </Form.Item>
      </Form>
    </Style>
  );
};

export default CreateContest;
