import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Divider } from "antd";

class ApartmentIndex extends React.Component {
    componentDidMount() {
        document.title = "React Realty Course - Apartments";
        this.props.getApartments(new Object());
    }

    columnsInfo = [{
            title: '№',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'House address',
            dataIndex: 'houseAddress',
            key: 'houseAddress',
            render: (text, record) => (
                <Link to={"/house/read/" + record.houseId}>{record.houseAddress}</Link>
            )
        },
        {
            title: 'Floor',
            dataIndex: 'floor',
            key: 'floor',
            render: (text, record) => (
                <span>{record.floor} of {record.houseMaxFloor}</span>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Link to={"/apartment/read/" + record.id}><SearchOutlined /> View</Link>
            )
        }
    ];

    handleTableChange(pagination, filters, sorter) {
        this.props.getApartments(pagination);
    }

    render() {
        let apartmentsInfo = this.props.apartmentsInfo.map(item => ({ ...item, key: item.id }));
        let isLoading = this.props.isLoading;
        let totalCount = this.props.totalCount;

        return (
            <>
                <Divider orientation={"center"}>Apartments list</Divider>
                <Table
                    dataSource={apartmentsInfo}
                    columns={this.columnsInfo} 
                    loading={isLoading}
                    pagination={{ total: totalCount }}
                    onChange={this.handleTableChange.bind(this)}
                    />
            </>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        apartmentsInfo: state.apartmentIndexReducer.apartmentsInfo,
        error: state.apartmentIndexReducer.error,
        isLoading: state.apartmentIndexReducer.isLoading,
        totalCount: state.apartmentIndexReducer.totalCount
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: (pagination) => dispatch(getApartments(pagination))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);