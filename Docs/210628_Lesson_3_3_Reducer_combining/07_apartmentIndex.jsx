import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class ApartmentIndex extends React.Component {
    render() {
        let apartmentsInfo = this.props.apartmentsInfo
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Apartments list</h3>

                <table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", backgroundColor: "lightgray" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Price</th>
                            <th>House ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apartmentsInfo.map(apartment =>
                        (<tr key={apartment.id}>
                            <td>{apartment.id}</td>
                            <td>{apartment.price} rub.</td>
                            <td>{apartment.houseId}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        apartmentsInfo: state.apartmentIndexReducer.apartmentsInfo
    };
};

export default connect(mapStateToProps)(ApartmentIndex);