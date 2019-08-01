import React, {Component} from 'react';

class Frisbeelisays extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample">
                    Add new
                </button>
                <br/>
                <div className="collapse" id="collapseExample">
                    <br/>
                    <div className="card card-body, col-10">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name of the disc"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Speed</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Glide</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Turn</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Fade</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <br/>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Frisbeelisays;