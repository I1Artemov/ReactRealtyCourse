import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Spin } from "antd";

class HouseIndex extends React.Component {
    componentDidMount() {
        this.props.getHouses(1);
    }

    render() {
        let housesInfo = this.props.housesInfo;
        let isLoading = this.props.isLoading;

        if (isLoading) {
            return (<div style={{ textAlign: "center", marginTop: "200px" }}>
                <Spin size="large" />
            </div>);
        }

        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Houses list</h3>

                <table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", backgroundColor: "lightgray" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Creation date</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {housesInfo.map(house =>
                        (<tr key={house.id}>
                            <td>{house.id}</td>
                            <td>{house.buildYear}</td>
                            <td>{house.address}</td>
                            <td><Link to={"/house/read/" + house.id}><SearchOutlined /> View</Link></td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
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