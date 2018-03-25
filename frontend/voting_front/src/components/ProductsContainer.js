import React, {Component} from 'react'
import axios from 'axios'
import Product from './Product'
import ProductForm from './ProductForm'
import update from 'immutability-helper'

class ProductsContainer extends Component{

	constructor(props){
		super(props)
		this.state = {
			products: [],
			editingProductId: null
		}
	}

	componentDidMount(){
		axios.get('http://localhost:3001/api/v1/products.json').then(
			response => {
				console.log(response)
				this.setState({products: response.data})
			}).catch(error => {
				console.log(error)
			})
	}

	handleProductUpVote = (productId) =>{ //se crea un nuevo array de productos y si se modifica, se modifica un clone envez del original
		const nextProducts = this.state.products.map((product) => {
		  if (product.id === productId) {
			return Object.assign({}, product, {
			  votes: product.votes + 1,
			});
		  } else {
			return product;
			}
		  });
		  this.setState({
		  products: nextProducts,
		});
	  }

	addNewProduct = () => {
		axios.post(
			'http://localhost:3001/api/v1/products',
			{ product:
				{
					title: '',
                    description: ''
				}
			}
		).then(response => {
			//agregar las nuevas ideas sin tener que refresh manualmente 
			console.log(response)
			const products = update(this.state.products, {
				$splice: [[0,0, response.data]]
			})
			this.setState({
				products: products,
				editingProductId: response.data.id
			})
		}).catch(error => {
			console.log(error)
		})
	}

	updateProduct = (product) => {
		const productIndex = this.state.products.findIndex(x => x.id === product.id)
		const products = update(this.state.products,{
			[productIndex]: { $set: product }
		})
		this.setState({products: products})
	}


	render() {
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
      ));
      const productComponents = products.map((product) => (
        <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote}
        />
    ));
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}

export default ProductsContainer