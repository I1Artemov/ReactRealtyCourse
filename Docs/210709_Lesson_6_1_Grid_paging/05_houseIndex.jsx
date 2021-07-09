import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Divider } from "antd";

class HouseIndex extends React.Component {
    componentDidMount() {
        document.title = "React Realty Course - Houses";
        this.props.getHouses(new Object());
    }

    columnsInfo = [{
        title: '№',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Build year',
        dataIndex: 'buildYear',
        key: 'buildYear'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Link to={"/house/read/" + record.id}><SearchOutlined /> View</Link>
        )
    }
    ];

    handleTableChange(pagination, filters, sorter) {
        this.props.getHouses(pagination);
    }

    render() {
        let housesInfo = this.props.housesInfo.map(item => ({ ...item, key: item.id }));
        let isLoading = this.props.isLoading;
        let totalCount = this.props.totalCount;

        return (
            <>
                <Divider orientation={"center"}>Houses list</Divider>
                <Table
                    dataSource={housesInfo} 
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
        housesInfo: state.houseIndexReducer.housesInfo,
        error: state.houseIndexReducer.error,
        isLoading: state.houseIndexReducer.isLoading,
        totalCount: state.houseIndexReducer.totalCount
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouses: (pagination) => dispatch(getHouses(pagination))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseIndex);