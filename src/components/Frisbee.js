import React, {Component} from 'react';

class Frisbee extends Component {
    render() {
        let apuHeader = "header" + this.props.id
        let apuCollapseTarget = "#collapse" + this.props.id
        let apuCollapse = "collapse" + this.props.id
        return (
            <div className="card">
                <div className="card-header" id={apuHeader} style={{textAlign: "left"}}>
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target={apuCollapseTarget}
                                aria-expanded="false" aria-controls="collapseOne">
                            {this.props.nimi}
                        </button>
                    </h5>
                </div>

                <div id={apuCollapse} className="collapse" aria-labelledby={apuHeader}
                     >
                    <div className="card-body">
                        <table className="table table-sm">
                            {/*<thead>*/}
                            {/*<tr>*/}
                            {/*    <th scope="col">#</th>*/}
                            {/*    <th scope="col">First</th>*/}
                            {/*    <th scope="col">Last</th>*/}
                            {/*    <th scope="col">Handle</th>*/}
                            {/*</tr>*/}
                            {/*</thead>*/}
                            <tbody style={{textAlign: "left"}}>
                            <tr>
                                <th scope="row">Name:</th>
                                <td>{this.props.nimi}</td>
                            </tr>
                            <tr>
                                <th scope="row">Speed:</th>
                                <td>{this.props.speed}</td>
                            </tr>
                            <tr>
                                <th scope="row">Glide:</th>
                                <td>{this.props.glide}</td>
                            </tr>
                            <tr>
                                <th scope="row">Turn:</th>
                                <td>{this.props.turn}</td>
                            </tr>
                            <tr>
                                <th scope="row">Fade:</th>
                                <td>{this.props.fade}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Frisbee;