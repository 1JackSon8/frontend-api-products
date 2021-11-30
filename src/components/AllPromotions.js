import React, { Component } from 'react';

import axios from 'axios'; 

export default class AllPromotions extends Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
          this.getProducts()
      }
  
      getProducts(){
          axios.get('http://www.mocky.io/v2/5bc3b9cc30000012007586b7')
          .then(res => {
            this.setState({persons: res.data});
           }).catch((err) => {
              console.log(err);
          })
      }

     orderSequence(){
        return this.state.persons.reverse()
      }
    
      render() {
          let html;
          if(this.state.persons == null){
              html = <p>Loading products...</p>;
          } else {
              html = (
                  <ul>
                      {this.orderSequence().map(res => {
                          return (
                            <li key={res.id}>
                                <a href="">
                                    <img src={res.heroImageUrl} alt="" />
                                    <h3>{res.name}</h3>
                                    <p>{res.description}</p>
                                    <div>
                                        <button>{res.termsAndConditionsButtonText}</button>
                                        <button>{res.joinNowButtonText}</button>
                                    </div>
                                </a>
                            </li>
                        )   
                      })}
                  </ul>
              )
          }
  
          return html;
   
      }
}