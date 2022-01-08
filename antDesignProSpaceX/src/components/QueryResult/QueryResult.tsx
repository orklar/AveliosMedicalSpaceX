import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PageContainer, PageLoading } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col, Input, InputNumber, Button, Spacer, Modal, Carousel, Image } from 'antd';
import { useIntl, FormattedMessage } from 'umi';


/** Query Result styled components */
const SpinnerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
};


/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }: { loading: any, error: any, data: any, children: any }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <Row style={SpinnerContainer}>
        <PageLoading />
      </Row>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;


