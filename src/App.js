import React, { Component } from 'react'

export default class App extends Component {
  // constructor def
  constructor(){
    super();
    this.state={

      //state variable
      general_product :[],
      rest_product : [],
      all_product :[]

    }
  }



  // login to categories the general product and other product










// component did mount block
componentDidMount(){
  fetch('https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json')
    .then(response => response.json())
    .then(data => this.setState({all_product: data}))

}









// render main component
  render() {
    return (
      <div>
       {JSON.stringify(this.state.all_product)}
      </div>
    )
  }
}
