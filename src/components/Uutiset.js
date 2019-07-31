import React, {Component} from 'react';

class Uutiset extends Component {
    render() {
        return (
            <div>
                <h1>Frisbeegolf Uutisia</h1>
                <iframe title={"embedattu"}
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiscgolfmetrix%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width={"500"} height={"500"} style={{border: 'none', overflow: 'hidden'}} scrolling={"no"} frameBorder={"0"}
                    allowtransparency={"true"} allow={"encrypted-media"}></iframe>
                <br></br>
            </div>
        );
    }
}

export default Uutiset;

