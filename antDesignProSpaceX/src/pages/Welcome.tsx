import React, { useState, useEffect } from 'react';
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



const Welcome: React.FC = () => {
  const intl = useIntl();
  const [filterCount, setFilterCount] = useState(5);
  const [filterText, setFilterText] = useState("");
  const [isDynamic, setIsDynamic] = useState(false);



  return (
    <ApolloProvider client={client}>
      <PageContainer>
        <Row>
          <Col span={6}>
            <Card className={styles.cardStyling} title="Search" extra={<a href="/welcome">Reset & Refresh</a>}>
              <SearchBox
                setFilterCount={setFilterCount} setFilterText={setFilterText} />
            </Card>
          </Col>
          <Col span={18}>
            <Card className={styles.cardStyling} title="Results" >
              <InfoList limit={filterCount} missionName={filterText} />
            </Card>
          </Col>
        </Row>
      </PageContainer>
    </ApolloProvider>
  );
};

export default Welcome;

