import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Row, Col, Input, InputNumber, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './SearchBox.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const SearchBox: React.FC = () => {
  const intl = useIntl();


  return (
    <Row justify="end">

      <Row className={styles.filterRowStyle}>
        <Col span={18}>
          <Input placeholder="Search..." onChange={(event) => console.log(event.target.value)} />

        </Col>
        <Col span={6}>
          <InputNumber min={1} max={10} defaultValue={5} onChange={(value) => console.log(value)} />
        </Col>
      </Row>
      <Row className={styles.searchRowStyle}>
        <Col >
          <Button type="primary" onClick={() => this.props.clikedSubmitSearch}>Submit</Button>
        </Col>
      </Row>
    </Row>


  );
};

export default SearchBox;