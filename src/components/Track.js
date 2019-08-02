import React, {Component} from 'react';

/**
 * Kenttien listaustoiminnallisuus, ei käytössä versiossa 1.0
 */

class Track extends Component {
    state={id: this.props.id, fullname: '', city: '', location:''}
    render() {
        let apuHeader = "header" + this.props.id
        let apuCollapseTarget = "#collapse" + this.props.id
        let apuCollapse = "collapse" + this.props.id
        let apuModal = "modal" + this.props.id
        let apuModalTarget = "#modal" + this.props.id
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
                            <tbody style={{textAlign: "left"}}>
                            <tr>
                                <th scope="row">Name:</th>
                                <td>{this.props.nimi}</td>
                            </tr>
                            <tr>
                                <th scope="row">City:</th>
                                <td>{this.props.speed}</td>
                            </tr>
                            <tr>
                                <th scope="row">Location:</th>
                                <td>{this.props.glide}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Track;