import React, { Component } from 'react';

import '../styles/Loading.css';
import '../styles/Titles.css';

export default class Loading extends Component {
    
    render(){
        
        return (
            <div className='container'>
                <div className='loading-container'>
                  <h1 className='d-flex justify-content-center loading-title'>Loading</h1>
                  <div className='d-flex justify-content-center loading-title'>
                    <img src='https://thumbs.gfycat.com/CrazyAlienatedDrafthorse-size_restricted.gif' alt='Loading Icon' width='400' height='400' /> 
                  </div>
                </div>
            </div> 
        );
        
    }
    
}