import React from 'react';
import ReactDOM from 'react-dom';

export default class ApartmentIndex extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Apartments list</h3>

                <table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", backgroundColor: "lightgray" }}>
                    <thead>
                        <th>ID</th>
                        <th>Creation date</th>
                        <th>Price</th>
                        <th>House address</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>21.06.2021</td>
                            <td>4 500 000 rub.</td>
                            <td>Ekaterinburg, 5, Kalinina st.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>25.06.2021</td>
                            <td>7 840 000 rub.</td>
                            <td>Ekaterinburg, 5, Kalinina st.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>26.06.2021</td>
                            <td>1 790 000 rub.</td>
                            <td>Ekaterinburg, 46, Victory st.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};