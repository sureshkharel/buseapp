import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
//assign object to return on loading the data
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
    //when page load send get request to backend to list products
    componentDidMount(){
        axios.get('http://localhost:4000/api/products/')
        .then(response =>{
            this.setState({products: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
//when user edits product, update the page
    componentDidUpdate(){
        axios.get('http://localhost:4000/api/products/')
        .then(response =>{
            this.setState({products: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
//listout each product
    productsList(){
        return this.state.products.map(function(currentProduct, i){
            return <Product product={currentProduct} key={i}/>;
        });
    }
    render() {
        return (
            <div>
            {this.productsList()}
            </div>
        )
    }
}

export default ProductList
