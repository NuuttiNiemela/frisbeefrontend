import React, {Component} from 'react';
import Frisbee from "./Frisbee";
import Track from "./Track";

class Kentat extends Component {
    render() {
        var lista = this.props.radat.map((frisbee) => {
            return <Track nimi={frisbee.fullname} key={frisbee.id} id={frisbee.id}
                            speed={frisbee.city} glide={frisbee.location}/>
        })
        return (
            <div>
                <div id="accordion" className={'col-10'}>
                    {lista}
                </div>
            </div>
        );
    }
}

export default Kentat;