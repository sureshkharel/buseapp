import { LAU, CAU } from '../vari';
import React, { Component } from 'react'
import axios from 'axios';

export default class ProductEdit extends Component {
  //define the variable  
  state = {
        currentUserName: '',
        currentUserEmail: '',
        productName:'',
        productPrice:'',
        productDescription:'',
        productImage:''
      };
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
//initialize the variable
        this.state = {
            productName:'',
            productPrice:'',
            productDescription:''
        }
    }
    //to catch the detail of the logged in user
    componentDidMount() {
      const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
      this.setState({
        currentUserEmail: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name
      });
    }
    //add the detail of the particular product to display in edit form
    componentDidMount(){
      axios.get(LAU+'api/products/'+this.props.match.params.id)
      .then(response => {
          this.setState({
              productName: response.data.productName,
              productPrice: response.data.productPrice,
              productDescription: response.data.productDescription
          })
      })
      .catch(function(error){
          console.log(error)
      })
    }
//collect the data of the input field
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
        console.log('Updated successfully');
    //created object to send to post request
        const edtProduct ={
          productName: this.state.productName,
          productDescription: this.state.productDescription,
          productPrice: this.state.productPrice
        };
        axios.post(LAU+'api/products/update/'+this.props.match.params.id, edtProduct)
        .then(res => alert(res.data));

        this.props.history.push('/productList');
      }
      
    render() {
        const { currentUserEmail, currentUserName } = this.state;
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
                    {/* applying image 
                    <div className="form-group">
                        <label>Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="UPDATE" className="btn btn-primary"/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        
                    </div>
                    </form>
                </div>
                </div>
        )
    }
}
