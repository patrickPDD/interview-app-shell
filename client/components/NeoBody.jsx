'use strict';
import {observer} from 'mobx-react';
// <-- That's store based magic, for now just think about it as making the following component watch when our state store changes
// Start work here!

//building data table
function recreateTable(data) {
    console.log("recreateTable");
    return Object.keys(data)
            .map(dateName => {
                return (
                        <table key={dateName}>
                            <thead>
                            <tr>
                                <td>Date</td>
                                <td>Name</td>
                                <td>Approach Date</td>
                                <td>Velocity</td>
                                <td>Miss Distance</td>
                                <td>URL</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data[dateName].map(meteor => {
                                    return (
                                            <tr>
                                                <td>{dateName}</td>
                                                <td>{meteor.name}</td>
                                                <td>{meteor.close_approach_data[0]['close_approach_date']}</td>
                                                <td>{meteor.close_approach_data[0]['relative_velocity'].kilometers_per_hour}</td>
                                                <td>{meteor.close_approach_data[0]['miss_distance'].kilometers}</td>
                                                <td>{meteor.links.self}</td>
                                            </tr>)
                                })}
                            </tbody>
                        </table>
                )
            });
}

function ReturnSelectOptions(options) {
    var p = options.map((option)=> {

        return <option key={option.value} value={option.value}>
            {option.label}
        </option>
    });
    return p;
}

module.exports = observer((props) => {
    return (
            <section>
                <header>
                    <h1>  {props.Store.title} </h1>
                </header>
                <div>
                    <span>Choose How Many Days to See</span>
                    <select name="form-field-name" onChange={props.Store.logChange}>
                        {ReturnSelectOptions(props.Store.options)}
                    </select>
                </div>
                <div>
                    {recreateTable(props.Store.displayData)}
                </div>
            </section>
    )
});
