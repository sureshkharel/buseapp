import React, { Component } from 'react'
import axios from 'axios';
export default class ProductEdit extends Component {

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            productName:'',
            productPrice:'',
            productDescription:''
        }
    }

    onChangeName(e){
        this.setState({
          productName:e.target.value
        })
      }
      onChangeDescription(e){
        this.setState({
          productDescription:e.target.value
        })
      }
      onChangePrice(e){
        this.setState({
          productPrice:e.target.value
        })
      }
      handleSubmit(e){
        e.preventDefault();
        console.log('Form submitted');
    
        const edtProduct ={
          productName: this.state.productName,
          productDescription: this.state.productDescription,
          productPrice: this.state.productPrice
        };
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id, edtProduct)
        .then(res => console.log(res.data));

        this.props.history.push('/');
      }

    componentDidMount(){
            axios.get('http://localhost:4000/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    productName: response.data.productDescription,
                    productPrice: response.data.productPrice,
                    productDescription: response.data.productDescription
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    productName: response.data.productDescription,
                    productPrice: response.data.productPrice,
                    productDescription: response.data.productDescription
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }
    render() {
        return (           
                <div className="card">        
                <div className="card-body">
                    <h5 className="card-title">Update Product</h5>
                    <form id="productForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" value={this.state.productName} id="productname" onChange={this.onChangeName}/>            
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" className="form-control" value={this.state.productPrice} id="productprice" onChange={this.onChangePrice}/>            
                    </div>
                    <div className="form-group">
                        <label>Product Description</label>
                        <input type="textarea" className="form-control" value={this.state.productDescription} id="productDescription" onChange={this.onChangeDescription}/>            
                    </div>
                    <div className="form-group">
                        <label>Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="SAVE" className="btn btn-primary"/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        
                    </div>
                    </form>
                </div>
                </div>
        )
    }
}
