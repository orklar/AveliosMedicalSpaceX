import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col, Input, InputNumber, Button, Spacer, Modal, Carousel, Image } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './DetailModal.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const DetailModal: React.FC = () => {
  const intl = useIntl();

  const onSearch = value => console.log(value);
  const missionName = "echo"

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        More
      </Button>
      <Modal
        title={"Details for Mission: " + missionName}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <h2>Launch Informations</h2>
        <h3>launch_date_local</h3>
        <h3>launch_success</h3>
        <h3>site_name_long </h3>
        <h3>site_name_long </h3>
        <h3>site_name_long </h3>
        <h3>site_name_long </h3>

        <h2>Links</h2>
        <h3>Wikipedia</h3>
        <h3>reddit_campaign</h3>
        <h3>reddit_launch</h3>

        <h2>Rocket Informations</h2>
        <h3>rocket_name</h3>
        <h3>rocket_type</h3>
        <h3>wikipedia</h3>

        <h2>Images</h2>
       
      </Modal>
    </>

  );
};

export default DetailModal;

const textHeader = {
  margin: '10px 0px 0px 0px',
  alignContent: 'right'
};

const filterRowStyle = {
  margin: '10px 13px 0px 0px',
  alignContent: 'right'
};

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
