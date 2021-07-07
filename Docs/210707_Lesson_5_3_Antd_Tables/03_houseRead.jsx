import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHouse } from './houseReadActions.jsx';
import { Descriptions, Divider, Row, Col, Spin } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

class HouseRead extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getHouse(id);
    }

    render() {
        let houseInfo = this.props.houseInfo;
        let isLoading = this.props.isLoading;

        if (isLoading) {
            return (<div style={{ textAlign: "center", marginTop: "200px" }}>
                <Spin size="large" />
            </div>);
        }

        return (
            <div>
                <Divider orientation={"center"}>Information about single house</Divider>

                <Row>
                    <Col span={4}>
                        <img key="house_logo" width={160} height={160} src="/images/house_logo_gray.png" />
                    </Col>

                    <Col span={20}>
                        <Descriptions bordered column={2}>
                            <Descriptions.Item label="ID in DB:">{houseInfo.id}</Descriptions.Item>
                            <Descriptions.Item label="Creation date:">{houseInfo.creationDateTime}</Descriptions.Item>

                            <Descriptions.Item label="Address" span={2}>{houseInfo.address}</Descriptions.Item>

                            <Descriptions.Item label="Build year:">{houseInfo.buildYear}</Descriptions.Item>
                            <Descriptions.Item label="Max floor:">{houseInfo.maxFloor}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <div style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}>
                    <Link to="/house/index/"><RollbackOutlined /> Back to houses</Link>
                </div>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        houseInfo: state.houseReadReducer.houseInfo,
        error: state.houseReadReducer.error,
        isLoading: state.houseReadReducer.isLoading
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouse: (id) => dispatch(getHouse(id))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseRead);