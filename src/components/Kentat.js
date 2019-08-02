import React, {Component} from 'react';
import Track from "./Track";
import paginate from 'paginate-array';


class Kentat extends Component {
    constructor(props){
        super(props);
        this.state={
            tracks: [],
            size: 15,
            page: 1,
            currPage: null
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        fetch(`http://localhost:8080/api/tracks/`)
            .then(response => response.json())
            .then(tracks => {
                const { page, size } = this.state;

                const currPage = paginate(tracks, page, size);

                this.setState({
                    ...this.state,
                    tracks,
                    currPage
                });
            });
    }
    previousPage() {
        const { currPage, page, size, tracks } = this.state;

        if (page > 1) {
            const newPage = page - 1;
            const newCurrPage = paginate(tracks, newPage, size);

            this.setState({
                ...this.state,
                page: newPage,
                currPage: newCurrPage
            });
        }
    }
    nextPage() {
        const { currPage, page, size, tracks } = this.state;

        if (page < currPage.totalPages) {
            const newPage = page + 1;
            const newCurrPage = paginate(tracks, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }
    handleChange(e) {
        const { value } = e.target;
        const { tracks, page } = this.state;

        const newSize = +value;
        const newPage = 1;
        const newCurrPage = paginate(tracks, newPage, newSize);

        this.setState({
            ...this.state,
            size: newSize,
            page: newPage,
            currPage: newCurrPage
        });
    }


    render() {
        const { page, size, currPage } = this.state;

        return (
            <div>
                <div className="card-body">
                    <table className="table table-sm">
                        <tbody style={{textAlign: "left"}}>

                        <tr>
                    {currPage &&
                    <td>
                        <th scope="row">Name:</th>
                        {currPage.data.map(track => <tr key={track.id}>{track.fullname}</tr>)}
                    </td>}


                    {currPage &&
                    <td>
                        <th scope="row">City:</th>
                        {currPage.data.map(track=> <tr key={track.id}>{track.city}</tr>)}
                    </td>}

                    {currPage &&
                    <td>
                        <th scope="row">Location:</th>
                        {currPage.data.map(track=> <tr key={track.id}>{track.location}</tr>)}
                    </td>}


                        </tr>

                        </tbody>
                    </table>

                    <button onClick={this.previousPage}>Previous Page</button>
                    <div>page: {page}</div>
                    <button onClick={this.nextPage}>Next Page</button>
                </div>


            </div>
        );
    }
}

export default Kentat;

