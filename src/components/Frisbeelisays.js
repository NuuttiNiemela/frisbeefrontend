import React, {Component} from 'react';

class Frisbeelisays extends Component {
    state={id:'', brand:'', name: '', speed: '1', glide:'1', turn:'0', fade:'0'}

    /**
     * Uuden frisbeen lisäys. Reactin pyytämät tekstikenttien change-handlerit ja staten kautta vienti Paasivulle,
     * jossa itse tallenus functio lähtee.
     */
    brandChange = (ev) => {this.setState({brand: ev.target.value})}
    nameChange = (ev) => {this.setState({name: ev.target.value.toUpperCase()})}
    speedChange = (ev) => {this.setState({speed: ev.target.value})}
    glideChange = (ev) => {this.setState({glide: ev.target.value})}
    turnChange = (ev) => {this.setState({turn: ev.target.value})}
    fadeChange = (ev) => {this.setState({fade: ev.target.value})}


    lisays = (ev) => {
        ev.preventDefault()
        this.props.add(this.state)
        this.setState({id:'', brand:'', name: '', speed: '1', glide:'1', turn:'0', fade:'0'})
    }


    render() {
        return (
            <div style={{textAlign: "left"}}>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                        >Add new
                </button>
                <br/>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New disc</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="brand">Brand</label>
                                        <input type="text" className="form-control" id="formControlBrand"
                                               placeholder="Name of the manufacturer" value={this.state.brand} onChange={this.brandChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="formControlName"
                                               placeholder="Name of the disc" value={this.state.name} onChange={this.nameChange}/>
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
                                <button type="button" className="btn btn-primary" onClick={this.lisays}>Add new</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Frisbeelisays;