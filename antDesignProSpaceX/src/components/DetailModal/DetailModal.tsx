import React, { useState } from 'react';
import { Button, Collapse, Modal, Carousel, Image, Divider } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import type LaunchInfoInterface from '../LaunchInfoInterface';


const { Panel } = Collapse;

const DetailModal = ({ launchInfoInterface }: { launchInfoInterface: LaunchInfoInterface }) => {
  const launchInfo = launchInfoInterface;
  const intl = useIntl();

  const onSearch = value => console.log(value);

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        More
      </Button>
      <Modal
        title={"Details for Mission: " + launchInfo.mission_name}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <h1>{launchInfo.mission_name}</h1>

        {launchInfo.links.flickr_images.length < 1 ?
          <img src={"https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg"} alt={"asdf"} width="300px" height="400px" />
          :
          <img src={launchInfo.links.flickr_images[0]} alt={"asdf"} width="300px" height="400px" />}

        <Divider />

        <Collapse accordion>
          <Panel header="Launch Informations" key="1">
            <h3>{launchInfo.launch_success ? "Launch was successfull!" : "Launch was unsuccessfull!"}</h3>
            <h3>Local Launch Date: {launchInfo.launch_date_local}</h3>
            <h3>Full Site Name: {launchInfo.launch_site.site_name_long}</h3>
          </Panel>
          <Panel header="Rocket Informations" key="2">
            <h3>Rocket Name: {launchInfo.rocket.rocket_name}</h3>
            <h3>Rocket Type: {launchInfo.rocket.rocket_type}</h3>
          </Panel>
          <Panel header="Links" key="3">
            <h3> <a href="Wikipedia">{launchInfo.links.wikipedia}</a> </h3>
            <h3> <a href="Reddit Campaign">{launchInfo.links.reddit_campaign}</a> </h3>
            <h3> <a href="Reddit Launch">{launchInfo.links.reddit_launch}</a> </h3>

          </Panel>
        </Collapse>

      </Modal>
    </>

  );
};

export default DetailModal;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};