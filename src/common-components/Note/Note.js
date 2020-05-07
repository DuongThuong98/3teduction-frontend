import { Component } from "react";
import React from 'react'
import {render} from 'react-dom';
class NoteFile extends Component{

    constructor(props)
    {
        super(props);
    }

    handleOnChange = (event) => {
        this.props.handleOnChange(event);
    }

    render()
    {
        return(
            <React.Fragment>
                <div className="panel panel-inverse" data-sortable-id="form-stuff-3">
                    <div className="panel-heading">
                        <h4 className="panel-title">Note Information</h4>
                    </div>
                    <div className="panel-body">
                            <div className="form-group">
                                <label className="col-md-3 control-label">Note</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name={this.props.name} onChange={this.handleOnChange}
                                       defaultValue={this.props.value}
                                    >
                                    </textarea>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default NoteFile;