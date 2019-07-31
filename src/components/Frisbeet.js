import React, {Component} from 'react';
import Frisbee from "./Frisbee";

class Frisbeet extends Component {
    render() {
        var lista = this.props.frisbeet.map((frisbee) => {
            return <Frisbee nimi={frisbee.name} key={frisbee.id} id={frisbee.id}
            speed={frisbee.speed} glide={frisbee.glide} turn={frisbee.turn} fade={frisbee.fade}/>
        })
        return (
            <div id="accordion" className={'col-10'}>
                {/*<table>*/}
                {/*    <tbody>*/}

                    {lista}

                {/*    </tbody>*/}
                {/*</table>*/}
            </div>
        );
    }
}

export default Frisbeet;