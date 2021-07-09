import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApartments, setMinPrice, setMaxPrice, setAddressPart, clearSearchParameters } from './apartmentIndexActions.jsx';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Table, Divider, InputNumber, Input, Button } from "antd";

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
        this.props.getApartments(pagination, this.props.minPrice, this.props.maxPrice, this.props.addressPart);
    }

    render() {
        let apartmentsInfo = this.props.apartmentsInfo.map(item => ({ ...item, key: item.id }));
        let isLoading = this.props.isLoading;
        let totalCount = this.props.totalCount;

        return (
            <>
                <Divider orientation={"center"}>Apartments list</Divider>
                <div style={{ marginBottom: '20px' }}>
                    <span>Price from:</span>
                    <InputNumber onChange={this.props.setMinPrice.bind(this)} value={this.props.minPrice} min={0} style={{ width: 110, marginLeft: 9, marginRight: 28 }} />

                    <span>Price to:</span>
                    <InputNumber onChange={this.props.setMaxPrice.bind(this)} value={this.props.maxPrice} min={0} style={{ width: 110, marginLeft: 9, marginRight: 28 }} />

                    <span>Address contains:</span>
                    <Input onChange={this.props.setAddressPart.bind(this)} value={this.props.addressPart} style={{ marginLeft: 9, marginRight: 28, width: 400 }} />

                    <Button onClick={this.handleTableChange.bind(this)} type="primary" icon={<SearchOutlined />} style={{ marginRight: "9px" }}>Apply</Button>
                    <Button onClick={this.props.clearSearchParameters.bind(this)} icon={<CloseOutlined />}>Reset</Button>
                </div>
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
        totalCount: state.apartmentIndexReducer.totalCount,
        minPrice: state.apartmentIndexReducer.minPrice,
        maxPrice: state.apartmentIndexReducer.maxPrice,
        addressPart: state.apartmentIndexReducer.addressPart
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: (pagination, minPrice, maxPrice, addressPart) =>
            dispatch(getApartments(pagination, minPrice, maxPrice, addressPart)),
        setMinPrice: (ev) => dispatch(setMinPrice(ev)),
        setMaxPrice: (ev) => dispatch(setMaxPrice(ev)),
        setAddressPart: (ev) => dispatch(setAddressPart(ev)),
        clearSearchParameters: () => dispatch(clearSearchParameters())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);