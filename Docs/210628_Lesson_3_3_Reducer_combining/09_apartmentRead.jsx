import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class ApartmentRead extends React.Component {
    render() {
        let apartmentInfo = this.props.apartmentInfo;

        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Information about single apartement</h3>

                <div>
                    <span style={{ fontWeight: "bold" }}>HouseId: </span>
                    <span> {apartmentInfo.houseId} </span>

                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Price: </span>
                    <span> {apartmentInfo.price} </span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Floor: </span>
                    <span> {apartmentInfo.floor} </span>
                </div>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        apartmentInfo: state.apartmentReadReducer.apartmentInfo
    };
};

export default connect(mapStateToProps)(ApartmentRead);