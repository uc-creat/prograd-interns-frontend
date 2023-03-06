import React, { useState } from 'react';
import './search.css'
function searchBar(){
    return (
        <>
        <div className="background">
        <div className="containers" >
          <input type="text" name="Search"/>
          <button type="submit" >Submit</button>
        </div>         
  </div>
  </>
    );
}
export default searchBar