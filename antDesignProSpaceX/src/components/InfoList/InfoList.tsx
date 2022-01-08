import React from 'react';
import { Row, Col } from 'antd';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../QueryResult/QueryResult';
import MissionSummaryCard from '../MissionSummaryCard/MissionSummaryCard';

/** l gql query to retreive all tracks */

export const LAUNCHES = gql`
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
  { filterCount: number, filterText: string, setIsSubmitted: any, isSubmitted: boolean }) => {


  console.log(limit, missionName)



  const { loading, error, data } = useQuery(LAUNCHES, {
    variables: { limit, missionName },
  });



  return (
    <Row gutter={[16, 16]}>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.launchesPast?.length < 1 ?
          <Col>
            <h1> Houston, we have a problem! Unfortunately, no results were returned.</h1>
            <p>
              A funny joke for you :)

              Why didn’t the sun go to college?
              Because it already had a million degrees!
            </p>

            <h3>If you believe there is an error, email to <a href="mailto: legal@oguzhankadaifciler.com">this email.</a></h3>
          </Col>
          : data?.launchesPast?.map((launch: any, index) => (
            <MissionSummaryCard key={launch.id} result={launch} />
          ))}
      </QueryResult>
    </Row>

  );
};

export default InfoList;

