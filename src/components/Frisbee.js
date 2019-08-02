import React, {Component} from 'react';

/**
 * Komponentti Frisbeelle, Accordion-ulkoasu. Mukana edit-nappula, jolla voidaan muuttaa kiekkoa,
 * sekä delete-nappula.
 */
class Frisbee extends Component {
    state={id: this.props.id, name: '', brand:'', speed: this.props.speed, glide: this.props.glide, turn: this.props.turn, fade: this.props.fade}

    brandChange = (ev) => {this.setState({brand: ev.target.value})}
    nameChange = (ev) => {this.setState({name: ev.target.value.toUpperCase()})}
    speedChange = (ev) => {this.setState({speed: ev.target.value})}
    glideChange = (ev) => {this.setState({glide: ev.target.value})}
    turnChange = (ev) => {this.setState({turn: ev.target.value})}
    fadeChange = (ev) => {this.setState({fade: ev.target.value})}

    poista = () => {
        this.props.poista(this.props.id)
    }

    muutos = () => {
        this.props.muutos(this.state.id, this.state)
    }

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
                            {this.props.brand} {this.props.nimi}
                        </button>
                    </h5>
                </div>

                <div id={apuCollapse} className="collapse" aria-labelledby={apuHeader}
                     >
                    <div className="card-body">
                        <table className="table table-sm">

                            <tbody style={{textAlign: "left"}}>
                            <tr>
                                <th scope="row">Brand:</th>
                                <td>{this.props.brand}</td>
                            </tr>
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
                            <tr>
                                <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target={apuModalTarget}
                                >Edit
                                </button>
                                    <br/>
                                    <div className="modal fade" id={apuModal} tabIndex="-1" role="dialog"
                                         aria-labelledby="muokkausModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="muokkausModalLabel">Edit disc</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="name">Brand</label>
                                                            <input type="text" className="form-control" id="controlInputBrand"
                                                                   placeholder={this.props.brand} value={this.state.brand} onChange={this.brandChange}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" className="form-control" id="controlInputNimi"
                                                                   placeholder={this.props.nimi} value={this.state.name} onChange={this.nameChange}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="formControlSelectSpeed">Speed</label>
                                                            <select className="form-control" id="formControlSelectSpeed" value={this.state.speed} onChange={this.speedChange}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                                <option>9</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                                <option>13</option>
                                                                <option>14</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="formControlSelectGlide">Glide</label>
                                                            <select className="form-control" id="formControlSelectGlide" value={this.state.glide} onChange={this.glideChange}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="formControlSelectTurn">Turn</label>
                                                            <select className="form-control" id="formControlSelectTurn" value={this.state.turn} onChange={this.turnChange}>
                                                                <option>-5</option>
                                                                <option>-4</option>
                                                                <option>-3</option>
                                                                <option>-2</option>
                                                                <option>-1</option>
                                                                <option>0</option>
                                                                <option>1</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="formControlSelectFade">Fade</label>
                                                            <select className="form-control" id="formControlSelectFade" value={this.state.fade} onChange={this.fadeChange}>
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={this.muutos}>Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div></td>
                                <td><button className="btn btn-danger" onClick={this.poista}>DEL</button></td>
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