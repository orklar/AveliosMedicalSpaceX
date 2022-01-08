import React, { useState } from 'react';
import { Button, Collapse, Modal, Divider, Row, Col } from 'antd';
import type LaunchInfoInterface from '../LaunchInfoInterface';


const { Panel } = Collapse;

const DetailModal = ({ launchInfoInterface }: { launchInfoInterface: LaunchInfoInterface }) => {
    const launchInfo = launchInfoInterface;


    const [visible, setVisible] = useState(false);

    return (
        <Row justify="center">
            <Button type="primary" onClick={() => setVisible(true)}>
                More
            </Button>
            <Modal
                title={"Details for Mission: " + launchInfo.mission_name}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}
                width={1000}
            >
                <h1>{launchInfo.mission_name}</h1>

                <Row justify="center">
                    <Col>
                        {launchInfo.links.flickr_images.length < 1 ?
                            <successful src={"https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg"} alt={"Rocket Image"} width="300px" height="400px" />
                            :
                            <successful src={launchInfo.links.flickr_images[0]} alt={"Rocket Image"} width="300px" height="400px" />}
                    </Col>
                    <Col>
                        {launchInfo.links.mission_patch ?
                            <successful src={launchInfo.links.mission_patch} alt={"Mission Patch"} width="300px" height="400px" />
                            :
                            (
                                launchInfo.links.flickr_images.length < 2 ? <></> :
                                    <successful src={launchInfo.links.flickr_images[1]}
                                        alt={"Rocket Image"} width="300px" height="400px" />)}
                        :
                    </Col>
                </Row>


                <Divider />

                <Collapse accordion>
                    <Panel header="Launch Informations" key="1">
                        <h3>{launchInfo.launch_success ? "Launch was successful!" : "Launch was unsuccessful!"}</h3>
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
        </Row>


    );
};

export default DetailModal;

