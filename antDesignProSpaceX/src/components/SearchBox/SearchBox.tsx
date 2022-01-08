import React, { useState } from 'react';
import { Typography, Row, Col, Input, InputNumber, Button } from 'antd';
import styles from './SearchBox.less';


const SearchBox: React.FC = ({ setFilterCount, setFilterText, setIsSubmitted }:
  { setFilterCount: any, setFilterText: any, setIsSubmitted: any }) => {

  const [_filterCount, _setFilterCount] = useState(5);
  const [_filterText, _setFilterText] = useState("");
  const [_dynamicSearch, _setDynamicSearch] = useState(false);


  const onSubmit = () => {
    setFilterText(_filterText);
    setFilterCount(_filterCount);
  }

  const toggleDynamicSearch = () => {
    _setDynamicSearch(!_dynamicSearch);
    onSubmit();
  }

  const filterTextChanged = (value: string) => {
    _setFilterText(value);
    if (_dynamicSearch) setFilterText(value);
  }

  const filterNumberChanged = (value: number) => {
    _setFilterCount(value);
    if (_dynamicSearch) setFilterCount(value);
  }

  return (
    <Row justify="space-between">

      <Row className={styles.filterRowStyle}>
        <Col span={18}>
          <Input placeholder="Search..." value={_filterText} onChange={(event) => { filterTextChanged(event.target.value) }} />

        </Col>
        <Col span={6}>
          <InputNumber min={1} max={10} defaultValue={5} value={_filterCount} onChange={(value) => { filterNumberChanged(value) }} />
        </Col>
      </Row>
      <Row justify="space-between" className={styles.searchRowStyle}>
        <Col>

          <Button type="primary" onClick={() => toggleDynamicSearch()}>
            {_dynamicSearch ? "Activate Static Search" : "Activate Dynamic Search"}
          </Button>

        </Col>
        <Col>
          {_dynamicSearch ? <></> : <Button type="primary" onClick={() => onSubmit()}>Submit</Button>}
        </Col>
      </Row>
    </Row>


  );
};

export default SearchBox;