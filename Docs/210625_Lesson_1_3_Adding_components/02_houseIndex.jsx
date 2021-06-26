import React from 'react';
import ReactDOM from 'react-dom';

export default class HouseIndex extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Houses list</h3>

                <table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", backgroundColor: "lightgray" }}>
                    <thead>
                        <th>ID</th>
                        <th>Creation date</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>25.06.2021</td>
                            <td>Ekaterinburg, 5, Kalinina st.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>23.06.2021</td>
                            <td>Ekaterinburg, 46, Victory st.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};