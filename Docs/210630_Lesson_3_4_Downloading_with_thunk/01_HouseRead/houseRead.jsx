import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getHouse } from './houseReadActions.jsx';

class HouseRead extends React.Component {
    componentDidMount() {
        this.props.getHouse(1);
    }

    render() {
        let houseInfo = this.props.houseInfo;
        let isLoading = this.props.isLoading;

        if (isLoading) {
            return (<div style={{ textAlign: "center", marginTop: "20px" }}>
                    Loading data...
                </div>);
        }

        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Information about single house</h3>

                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span> {houseInfo.address} </span>
                    
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Build year: </span>
                    <span> {houseInfo.buildYear}  </span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Max floor: </span>
                    <span> {houseInfo.maxFloor}  </span>
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