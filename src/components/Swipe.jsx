'use strict';

import React from 'react';

export default class Swipe extends React.Component {

    constructor(props) {
        super(props);
    }

    onClickNoButton() {
        alert('You have clicked the no-button!');
    }

    onClickYesButton() {
        alert('You have clicked the yes-button!');
    }

    render() {
        var scope = {
            nameHeader:{
                marginBottom:'5%'
            },
            imageNameDiv: {
                textAlign: 'center'
            },
            imageStyle: {
                width: '80%',
                height: '80%'
            },
            schoolCompanyText:{
                fontSize:26,
                marginTop:'5%',
                marginBottom:'5%'
            },
            yesNoButton:{
                fontSize:36
            }
        };
        return (
            <div className="col-sm-12" style={scope.imageNameDiv}>
                <div className="col-sm-12">
                    <h1 style={scope.nameHeader}>{this.props.name}</h1>
                    <img src={this.props.profileImageUrl} className="img-rounded" style={scope.imageStyle}/>
                </div>
                <div className="col-sm-12" style={scope.schoolCompanyText}>
                    <p>{this.props.school}</p>
                    <br/>
                    <p>{this.props.company}</p>
                </div>

                    <div className="col-sm-offset-2 col-sm-3">
                        <buttton className="btn btn-danger" onClick={this.onClickNoButton.bind(this)} style={scope.yesNoButton}>
                            No
                        </buttton>
                    </div>
                    <div className="col-sm-offset-2 col-sm-3">
                        <button className="btn btn-success" onClick={this.onClickYesButton.bind(this)} style={scope.yesNoButton}>
                            Yes
                        </button>
                    </div>
                </div>
        );
    }
};
