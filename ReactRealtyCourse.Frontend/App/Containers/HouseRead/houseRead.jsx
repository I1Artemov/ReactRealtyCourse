import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class HouseRead extends React.Component {
    render() {
        let houseInfo = this.props.houseInfo;

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
        houseInfo: state.houseReadReducer.houseInfo
    };
};

export default connect(mapStateToProps)(HouseRead);