import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Spin, Table, Divider } from "antd";

class HouseIndex extends React.Component {
    componentDidMount() {
        document.title = "React Realty Course - Houses";
        this.props.getHouses(1);
    }

    render() {
        let housesInfo = this.props.housesInfo;
        let isLoading = this.props.isLoading;

        let columnsInfo = [{
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

        if (isLoading) {
            return (<div style={{ textAlign: "center", marginTop: "200px" }}>
                <Spin size="large" />
            </div>);
        }

        return (
            <>
                <Divider orientation={"center"}>Houses list</Divider>
                <Table
                    dataSource={housesInfo} 
                    columns={columnsInfo} 
                    loading={isLoading}
                    />
            </>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        housesInfo: state.houseIndexReducer.housesInfo,
        error: state.houseIndexReducer.error,
        isLoading: state.houseIndexReducer.isLoading
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouses: () => dispatch(getHouses())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseIndex);