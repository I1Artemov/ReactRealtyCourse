import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class HouseIndex extends React.Component {
    render() {
        let housesInfo = this.props.housesInfo;

        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Houses list</h3>

                <table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", backgroundColor: "lightgray" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Creation date</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {housesInfo.map(house =>
                        (<tr key={house.id}>
                            <td>{house.id}</td>
                            <td>{house.buildYear}</td>
                            <td>{house.address}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        housesInfo: state.houseIndexReducer.housesInfo
    };
};

export default connect(mapStateToProps)(HouseIndex);