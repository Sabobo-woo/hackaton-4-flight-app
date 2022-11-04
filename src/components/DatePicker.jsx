import React, { Component, Fragment } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class DatePicker extends Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date()
        }
    }
    handleStartDateChange = date => {
        this.setState({ startDate: date });
    };
    render() {
        return (
            <Fragment>
                <h3 align="center">Demo of material ui Date Picker</h3>
                <div align="center" className="filterControls">

                    <div className="filterDate">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                allowKeyboardControl={false}
                                autoOk
                                disableToolbar
                                inputVariant="outlined"
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Start Date"
                                name="startDate"
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default (DatePicker)