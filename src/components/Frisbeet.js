import React, {Component} from 'react';
import Frisbee from "./Frisbee";
import Frisbeelisays from "./Frisbeelisays";

class Frisbeet extends Component {
    render() {
        var lista = this.props.frisbeet.map((frisbee) => {
            return <Frisbee nimi={frisbee.name} key={frisbee.id} id={frisbee.id}
                            speed={frisbee.speed} glide={frisbee.glide} turn={frisbee.turn} fade={frisbee.fade}
                            poista={this.props.delete} muutos={this.props.update}/>
        })
        return (
            <div>
                <Frisbeelisays add={this.props.add}/>
                <div id="accordion" className={'col-10'}>
                    {lista}

                    {/*<nav aria-label="Page navigation example">*/}
                    {/*    <ul className="pagination">*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a className="page-link" href="#" aria-label="Previous">*/}
                    {/*                <span aria-hidden="true">&laquo;</span>*/}
                    {/*                <span className="sr-only">Previous</span>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item"><a className="page-link" onClick={this.props.haku} >1</a></li>*/}
                    {/*        <li className="page-item"><a className="page-link" >2</a></li>*/}
                    {/*        <li className="page-item"><a className="page-link" >3</a></li>*/}
                    {/*        <li className="page-item"><a className="page-link" >4</a></li>*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a className="page-link" href="#" aria-label="Next">*/}
                    {/*                <span aria-hidden="true">&raquo;</span>*/}
                    {/*                <span className="sr-only">Next</span>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                </div>
            </div>
        );
    }
}

export default Frisbeet;
