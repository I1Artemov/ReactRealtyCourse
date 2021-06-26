import React from 'react';
import ReactDOM from 'react-dom';

export default class HouseRead extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Information about single house</h3>

                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span> Russia, Ekaterinburg, 7, Kalinina st. </span>
                    
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Build year: </span>
                    <span> 2015 </span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Max floor: </span>
                    <span> 16 </span>
                </div>
            </div>
        );
    }
};