import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './Welcome.less';
import InfoList from '../components/InfoList/InfoList';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

/**
 * 
 * 
 * 
 * 
 * 
 *  <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>

      **/



const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    <ApolloProvider client={client}>
      <PageContainer>
        <Row>
          <Col span={6}>
            <Card className={styles.cardStyling} title="Search" extra={<a href="#">More</a>}>
              <SearchBox></SearchBox>
            </Card>
          </Col>
          <Col span={18}>
            <Card className={styles.cardStyling} title="Results" extra={<a href="#">More</a>} >
              <InfoList />
            </Card>
          </Col>
        </Row>
      </PageContainer>
    </ApolloProvider>
  );
};

export default Welcome;

