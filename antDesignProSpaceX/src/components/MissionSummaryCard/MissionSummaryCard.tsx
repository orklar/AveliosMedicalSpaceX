import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col, Input, InputNumber, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './MissionSummaryCard.less';
import DetailModal from '../DetailModal/DetailModal';


const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const MissionSummaryCard = ({ }) => {
  //console.log(result);
  //const { mission_name, launch_date_local, launch_site, launch_year, launch_success, links, rocket, details } = result;

  return (
    <Card>
      <h1>Mission Name: Echo</h1>
      <h4>Mission Date: 12.12.2012</h4>

      <img src={"https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg"} alt={"asdf"} width="299px" />

      <h3>Success: True</h3>
      <h3>Site Name: Echo</h3>

      <Row justify="end">
        <Col>
          <DetailModal />
        </Col>
      </Row>

    </Card>
  );
};

export default MissionSummaryCard;



const searchRowStyle = {
  margin: '10px 0px 0px 0px',
  alignContent: 'right'
};

const filterRowStyle = {
  margin: '10px 13px 0px 0px',
  alignContent: 'right'
};