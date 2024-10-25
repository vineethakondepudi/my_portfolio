import React, { useState, useCallback } from 'react';
import { DatePicker, Space, Table } from 'antd';
import { RefugeeData } from './RefugeeData';

const { RangePicker } = DatePicker;

function Samratas() {
  // State for date range and filtered data
  const [dateRange, setDateRange] = useState([]);
  const [filteredData, setFilteredData] = useState(RefugeeData);

  // Function to filter data based on date range
  const filterData = useCallback((dates) => {
    if (dates && dates.length === 2) {
      const [start, end] = dates;
      const startDate = start.startOf('day').toDate();
      const endDate = end.endOf('day').toDate();

      const filtered = RefugeeData.filter((item) => {
        const joinedDate = new Date(item.joinedDate.split('-').reverse().join('-'));
        return joinedDate >= startDate && joinedDate <= endDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(RefugeeData); // Reset to original data if no valid date range
    }
  }, []);

  return (
    <div>
      <h1>Filter Refugee Data by Joined Date</h1>
      <Space direction="vertical" size={12}>
        {/* Date Picker for selecting the range */}
        <RangePicker
          onChange={(dates) => {
            setDateRange(dates || []);
            filterData(dates);
          }}
        />
        <Table 
          dataSource={filteredData} 
          columns={columns} 
          rowKey="id"
        />
      </Space>
    </div>
  );
}

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
  { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Gender', dataIndex: 'gender', key: 'gender' },
  { title: 'Date of Birth', dataIndex: 'dateOfBirth', key: 'dateOfBirth' },
  { title: 'Country of Origin', dataIndex: 'countryOfOrigin', key: 'countryOfOrigin' },
  { title: 'Current Location', dataIndex: 'currentLocation', key: 'currentLocation' },
  { title: 'Language', dataIndex: 'language', key: 'language' },
  { title: 'Joined Date', dataIndex: 'joinedDate', key: 'joinedDate' },
];

export default Samratas;
