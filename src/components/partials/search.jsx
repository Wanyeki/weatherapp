import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="search">
                <div className="search_wrapper">
                    <input type="search" onKeyPress={
                        e=>{ console.log(e.key)
                            if(e.key=="Enter"){
                              this.props.search_city(e.target.value)
                              
                            }
                        }
                    } placeholder="search for a place" />
                </div>
            </div>
         );
    }
}
 
export default Search;