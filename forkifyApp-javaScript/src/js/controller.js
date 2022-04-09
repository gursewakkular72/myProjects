import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime'
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import {MODAL_CLOSE_SEC} from './config.js'
import view from './views/View.js';

// perserves the state of the application, 
// The code below is not "js", it only comprehended by parcel. 
// if(module.hot){
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

// This functions loads the current receipe to the right, basically shows the details of the recipe, e.g. list of ingredients.
const controlRecipes = async function(){

  try{
    
    //getting the hash id
    const hashID = window.location.hash.slice(1);
    
    // Guard clause for empty ID
    if(!hashID) return;
    resultsView.update(model.getSearchResultsPage());
     
    bookmarksView.update(model.state.bookmarks);
   
    // Notice, we are 'awaiting' this function because, its an async funtions which means it returns a promise and we need to stop the execution until the promise is fulfilled.
    await model.loadRecipe(hashID);
   // could also be written as const {recipe} = model.state;

    // render the data on the page 
    const recipe = model.state.recipe;

    recipeView.render(recipe);
  
  }
  catch(err){


    recipeView.renderError();
    console.error(err);
    
  }
  
  

}

// this function displays the list of the search related recipes. 

const constrolSearchResults = async function(){
  try{

     resultsView.renderSpinner();

     //1. Getting the search Query
     const query = searchView.getQuery();
     if(!query) return;
     // 2. loading the results
     await model.loadSearchResult(query);
  
    //const itemsOnOnePage = model.state.search.result.
    //3. renders the list of the resuts on the left hand side of the page
    resultsView.render(model.getSearchResultsPage());
  //renders the buttons at the bottom of the page.
    paginationView.render(model.state.search);
    

    ////
  
  
    
  }
  catch(err){
    console.log(err);
  }
 

}

const controlPagination = function(page){
    //3. rednering the result on the page 
    console.log(console.log(`This the page ${page}`));
    resultsView.render(model.getSearchResultsPage(page));
      // 4. Render intial pagination results
    paginationView.render(model.state.search);
}

const controlServings = function(newServings){
  /// Update the Recipe servings in the state
  model.updateServings(newServings);
 // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function(){

  /// add or delete bookmarks
  if(!model.state.recipe.bookmarked){
    model.addBookmarks(model.state.recipe);
  }
  else {
    model.deleteBookmarks(model.state.recipe.id);
  }
  
  // updating the recipe view based on the addition and deletion of bookmarks
  recipeView.update(model.state.recipe);
  // rendering the bookmarks 
  bookmarksView.render(model.state.bookmarks);
}

const controlBookMarks = function(){
  bookmarksView.render(model.state.bookmarks);
}

// uploading Recipe
const controlAddRecipe = async function(newRecipe){
  // upload the new Recipe
 try{
     recipeView.renderSpinner();
     await  model.uploadRecipe(newRecipe);
     console.log(model.state.recipe);
     //render the uploaded recipe
     recipeView.render(model.state.recipe);
    //displaying success message after the rendeeing
    addRecipeView.renderMessage();
    /// rendering the bookmark view
    bookmarksView.render(model.state.bookmarks);
    //change ID in URL
    window.history.pushState(null,'', `#${model.state.recipe.id}`);
    //close the modal window/form after the specified time
    setTimeout(function(){
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC*1000);
 }
 catch(err){
   addRecipeView.renderError(err.message);
 }
 

}

const init = function(){ 
  bookmarksView.addHandleRender(controlBookMarks) // this called on page load and fetches the bookmarks from the bookmarks array
  recipeView.addHandleRender(controlRecipes); // this is called on page reload and hash change
  recipeView.addHandlerUpdateServings(controlServings); // this is called when user indjusts the number of servings.
  recipeView.addHandlerAddBookmark(controlAddBookmark); // this is called when the bookmark button is clicked.
  searchView.addHandlerSearch(constrolSearchResults); // this is called when a search is executed
  paginationView.addHandlerClick(controlPagination);  // this is called when page buttons are clicked.
  addRecipeView.addHandlerUpload(controlAddRecipe);
}


init();
 
