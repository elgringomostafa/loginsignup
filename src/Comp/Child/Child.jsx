import React, { Component } from 'react';

class About extends Component {
 
    render() {
        return <>
        {/* <h1>My Name Is {this.state.userName} and my age is {this.state.userAge}</h1> */}
        {/* <h1>{this.props.m}</h1> */}
        <div className="col-md-4">
        <div className="bg-info p-5 mb-3">
            <h3 className='text-center text-white'>
                productName: {this.props.m.name}
            </h3>
            <h3 className='text-center text-white'>
                productPrice: {this.props.m.Price}
            </h3>
            <h3 className='text-center text-white'>
                productCat: {this.props.m.cat}
            </h3>
            <h3 className='text-center text-white'>
                productDes: {this.props.m.des}
            </h3>

            <button className='btn btn-danger mb-5' onClick={this.props.delete}> Delete</button>
        </div>
        </div>
        </>
    }
}

export default About;