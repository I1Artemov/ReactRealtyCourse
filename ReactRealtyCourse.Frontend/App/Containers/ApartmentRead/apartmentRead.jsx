import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getApartment } from './apartmentReadActions.jsx';

class ApartmentRead extends React.Component {
    componentDidMount() {
        this.props.getApartment(1);
    }

    render() {
        let apartmentInfo = this.props.apartmentInfo;
        let isLoading = this.props.isLoading;

        if (isLoading) {
            return (<div style={{ textAlign: "center", marginTop: "20px" }}>
                Loading data...
            </div>);
        }

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
        apartmentInfo: state.apartmentReadReducer.apartmentInfo,
        isLoading: state.apartmentReadReducer.isLoading,
        error: state.apartmentReadReducer.error
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartment: (id) => dispatch(getApartment(id))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentRead);