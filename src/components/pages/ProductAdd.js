import React, { Component } from 'react';
import axios from 'axios';
class ProductAdd extends Component {
  //define variable
  state = {
    currentUserName: '',
    currentUserEmail: '',
    productName:'',
    productPrice:'',
    productDescription:'',
    productImage:''
  };

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
//initialize the variable
    this.state = {
      productName: '',
      productDescription: '',
      productPrice:''
    }
  }
  //collect detail of the each field
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
  onResetting = () => { 
    document.getElementById("productForm").reset();
  }
  
  handleSubmit(e){
    e.preventDefault();
    alert('Product added');
// make object of new product detail to send in post request
    const newProduct ={
      productName: this.state.productName,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice
    }
    //send post request to add new product
    axios.post('http://localhost:4000/api/products/add', newProduct)
    .then(res => console.log(res.data));
//clear the form data
    this.setState({
      productName:'',
      productDescription:'',
      productPrice:''
    })
  }
  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div className="card">
        {/* <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>You have reached the authorized add product area of the buse</p> */}
      <div className="card-body">
      <h5 className="card-title">Add Product</h5>
      {/* form to accept parameter of product */}
        <form id="productForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control" value={this.state.productName} id="productname" placeholder="Enter product name" onChange={this.onChangeName}/>            
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input type="text" className="form-control" value={this.state.productPrice} id="productprice" placeholder="Enter product price" onChange={this.onChangePrice}/>            
         </div>
          <div className="form-group">
            <label>Product Description</label>
            <input type="textarea" className="form-control" value={this.state.productDescription} id="productDescription" placeholder="Enter product detail" onChange={this.onChangeDescription}/>            
          </div>
          <div className="form-group">
            <label>Example file input</label>
            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
          </div>
          <div className="form-group">
            <input type="submit" value="SAVE" className="btn btn-primary"/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="button" value="RESET" className="btn btn-danger" onClick={this.onResetting}/>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default ProductAdd;