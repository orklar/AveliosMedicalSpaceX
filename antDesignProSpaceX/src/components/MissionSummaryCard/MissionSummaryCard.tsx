import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col, Input, InputNumber, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './MissionSummaryCard.less';
import DetailModal from '../DetailModal/DetailModal';
import type LaunchInfoInterface from '../LaunchInfoInterface';


const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const MissionSummaryCard = ({ result }: { result: LaunchInfoInterface }) => {
  console.log(result);
  const LaunchInfo = result;
  console.log(LaunchInfo);
  const Image = LaunchInfo.links.flickr_images.length === 0 ?
    "https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg" :
    LaunchInfo.links.flickr_images[0]

  return (
    <Card className={styles.card}>
      <Row justify="center">
        <Col>


          <h1 className={styles.h1}>Mission Name: {LaunchInfo.mission_name}</h1>
          <h2 className={styles.h2}>Mission Date: {LaunchInfo.launch_date_local}</h2>

          <img src={Image} alt={"asdf"} width="300px" height="400px" />
        </Col>
      </Row>

      <h3 className={styles.h3}>Mission Successfull: {String(LaunchInfo.launch_success)}</h3>
      <h3 className={styles.h3}>Site Name: {LaunchInfo.launch_site.site_name}</h3>

      <Row justify="end">
        <Col>
          <DetailModal launchInfoInterface={LaunchInfo} />
        </Col>
      </Row>

    </Card>
  );
};

export default MissionSummaryCard;



