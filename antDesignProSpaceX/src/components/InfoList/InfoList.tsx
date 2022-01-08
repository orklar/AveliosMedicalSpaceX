import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Row, Col, Input, InputNumber, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './InfoList.less';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../QueryResult/QueryResult';
import MissionSummaryCard from '../MissionSummaryCard/MissionSummaryCard';

/** TRACKS gql query to retreive all tracks */

export const TRACKS = gql`
      query Launch($limit: Int!, $missionName: String!){
       launchesPast(limit: $limit, find: {mission_name: $missionName}) {
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

const InfoList: React.FC = ({ limit, missionName, setIsSubmitted, isSubmitted }:
  { filterCount: integer, filterText: string, setIsSubmitted: any, isSubmitted: boolean }) => {


  console.log(limit, missionName)



  const { loading, error, data, refresh } = useQuery(TRACKS, {
    variables: { limit, missionName },
  });

  const intl = useIntl();


  return (
    <Row gutter={[16, 16]}>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.launchesPast?.map((launch: any, index) => (
          <MissionSummaryCard key={launch.id} result={launch} />
        ))}
      </QueryResult>
    </Row>

  );
};

export default InfoList;


