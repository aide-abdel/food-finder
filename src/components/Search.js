import React from 'react'

// The user interface for the "Food Finder" app is designed to be simple and intuitive. Users can enter the ingredients they have on hand in the search bar, and the app will display a list of recipes that include those ingredients. The search results are displayed in cards, which provide information about the recipe, such as its name, image, and a brief description.

// Users can filter the search results by cuisine, meal type, and dietary restrictions using the filters on the left-hand side of the screen. They can also save their favorite recipes for quick access using the "Add to Favorites" button.


function Search() {
  return (
    <div className='search-main'>
        <input type='text' className='search-main-input' placeholder='Search ingredient'/>
        {/* <input type="button" value="Search" className='search-main-button'/> */}
        <div className='search-main-filters'>
            <div className='search-main-filter-title'>Filter by:</div>
            <div className='search-main-filter'>cuisine</div>
            <div className='search-main-filter'>type</div>
            <div className='search-main-filter'>dietry restriction</div>
        </div>
    </div>
  )
}

export default Search