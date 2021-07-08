import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Spin, Table, Divider } from "antd";

class ApartmentIndex extends React.Component {
    componentDidMount() {
        document.title = "React Realty Course - Apartments";
        this.props.getApartments();
    }

    render() {
        let apartmentsInfo = this.props.apartmentsInfo;
        let isLoading = this.props.isLoading;

        let columnsInfo = [{
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
            title: 'House ID',
            dataIndex: 'houseId',
            key: 'houseId',
            render: (text, record) => (
                <Link to={"/house/read/" + record.houseId}>{record.houseId}</Link>
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

        if (isLoading) {
            return (<div style={{ textAlign: "center", marginTop: "200px" }}>
                <Spin size="large" />
            </div>);
        }

        return (
            <>
                <Divider orientation={"center"}>Apartments list</Divider>
                <Table
                    dataSource={apartmentsInfo}
                    columns={columnsInfo} 
                    loading={isLoading}
                    />
            </>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        apartmentsInfo: state.apartmentIndexReducer.apartmentsInfo,
        error: state.apartmentIndexReducer.error,
        isLoading: state.apartmentIndexReducer.isLoading
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: () => dispatch(getApartments())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);