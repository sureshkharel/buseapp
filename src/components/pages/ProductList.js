import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props =>(
    <div className="card" style={{width: '25rem', margin:'10px'}}>
    <div className="card-body">
        <h5 className="card-title">{props.product.productName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.product.productPrice}</h6>
        <p className="card-text">{props.product.productDescription}</p>
        <Link to={"/edit/"+props.product._id}>Edit</Link>
    </div>
    </div>
)

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {products:[]};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/products/')
        .then(response =>{
            this.setState({products: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    productsList(){
        return this.state.products.map(function(currentProduct, i){
            return <Product product={currentProduct} key={i}/>;
        });
    }
    render() {
        return (
            <div>
            {this.productsList()}
                {/* <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
                </div> */}
            </div>
        )
    }
}

export default ProductList
