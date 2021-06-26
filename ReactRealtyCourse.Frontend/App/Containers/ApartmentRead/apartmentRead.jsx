import React from 'react';
import ReactDOM from 'react-dom';

export default class HouseRead extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Information about single apartement</h3>

                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span> Russia, Ekaterinburg, 7, Kalinina st. </span>

                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Price: </span>
                    <span> 4 500 000 rub. </span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Floor: </span>
                    <span> 14 </span>
                </div>
            </div>
        );
    }
};