import React, {Component} from 'react';
import Frisbee from "./Frisbee";
import Frisbeelisays from "./Frisbeelisays";

/**
 * Frisbee mappays frisbeet sivua varten.
 */
class Frisbeet extends Component {
    render() {
        var lista = this.props.frisbeet.map((frisbee) => {
            return <Frisbee nimi={frisbee.name} brand={frisbee.brand} key={frisbee.id} id={frisbee.id}
            speed={frisbee.speed} glide={frisbee.glide} turn={frisbee.turn} fade={frisbee.fade}
            poista={this.props.delete} muutos={this.props.update}/>
        })
        return (
            <div>
                <Frisbeelisays add={this.props.add}/>
                <div id="accordion" className={'col-10'}>
                    {lista}
                </div>
            </div>
        );
    }
}

export default Frisbeet;
