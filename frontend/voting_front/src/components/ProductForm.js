import React, { Component } from 'react'
import axios from 'axios'

class ProductFrom extends Component{
    constructor(props){
		super(props)
		this.state = {
            title: this.props.product.title,
            description: this.props.product.description,
            url: this.props.product.url,
            votes: this.props.product.votes,
            submitterAvatarUrl: this.props.product.submitterAvatarUrl,
            productImageUrl: this.props.product.productImageUrl
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBlur = () => {
        const product = {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
            votes: this.state.votes,
            submitterAvatarUrl: this.state.submitterAvatarUrl,
            productImageUrl: this.state.productImageUrl
        }
        axios.put(
            `http://localhost:3001/api/v1/products/${this.props.product.id}`,
            {
                product: product
            }
        ).then(response => {
            console.log(response)
            this.props.updateProduct(response.data);
        }).catch(error => console.log(error))
    }
    
    render() {
        return(
            <div className= "tile">
                <form onBlur={this.handleBlur }>
                    <input className="input" type="text" name="title" 
                    placeholder="Enter a Title" value={this.state.title} 
                    onChange={this.handleInput} />
                    <textarea className="input" name="description" placeholder="Description: "
                    value={this.state.description} onChange={this.handleInput}></textarea>
                </form>
            </div>
        );
    }
}

export default ProductFrom