import React, {Component} from 'react';
import Navigointi from "./Navigointi";
import Frisbee from "./Frisbee";

class Frisbeet extends Component {
    render() {
        var lista = this.props.frisbeet.map((frisbee) => {
            return <Frisbee nimi={frisbee.name} key={frisbee.id}/>
        })
        return (
            <div>
                <table>
                    <tbody>

                    {lista}

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Frisbeet;