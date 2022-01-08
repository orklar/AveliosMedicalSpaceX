import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Row, Col, Input, InputNumber, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './InfoList.less';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../QueryResult/QueryResult';
import MissionSummaryCard from '../MissionSummaryCard/MissionSummaryCard';

const InfoList: React.FC = () => {
  const { loading, error, data } = useQuery(TRACKS);

  const intl = useIntl();


  return (
    <Row gutter={[16, 16]}>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.launchesPast?.map((track, index) => (
          //<ResultCard key={track.id} result={track} />
          <MissionSummaryCard key={track.id} />
        ))}
      </QueryResult>
    </Row>

  );
};

export default InfoList;


/** TRACKS gql query to retreive all tracks */
export const TRACKS = gql`
      query {
        launchesPast(limit: 1000) {
        mission_name
    launch_date_local
      launch_site {
        site_name_long
      site_name
    }
      launch_success
      launch_year
      links {
        article_link
      video_link
      flickr_images
      wikipedia
      mission_patch
      reddit_campaign
      reddit_launch
    }
      rocket {
        rocket_name
      rocket_type
      rocket {
        wikipedia
      }
    }
      details
  }
}

      `;