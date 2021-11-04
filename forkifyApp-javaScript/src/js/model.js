import {async} from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE,KEY } from './config.js';
import { getJSON, sendJSON } from './helper.js';
export {API_URL,RESULTS_PER_PAGE} from './config.js';

/// stores the data that is being fetched

export const state = {
    // stores the current recipe that is displayed on the right hand side
    recipe:{
    },
    search:{
        query :'',
        // stores the list of recipes that is displayed on the left hand side.
        result:[], 
        page: 1,
        resultsPerPage: RESULTS_PER_PAGE
    },
    bookmarks:[]
};

const createRecipeObject = function(data){
    let {recipe} = data.data
    return {
        id: recipe.id,
        title: recipe.title,
        publisher:recipe.publisher,
        sourceUrl: recipe.source_url,
        image:recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients:recipe.ingredients,
        ...(recipe.key && {key:recipe.key})
        }
    
}

// This function only loads the current recipe, the recipe that is at the top of the list ( when a search is executed for the first time). 
// The this functions basically takes the "HASH" from the browsers' search bar and loads it. 
export const loadRecipe = async function(hashID){


    try {
        
        // NOTICE: this URL is different from the method, "loadSearchResult", below.
        // the '?key=${KEY}' in the URL helps to load the uploaded recipe
        const data = await getJSON(`${API_URL}/${hashID}?key=${KEY}`);
    
        state.recipe = createRecipeObject(data);
        // marking the recipers that has been bookmarked.
        // This if block basically looks at at bookmarks array sees the Recipe that is being displayed on the right hand side exits in the 
        // bookmarks array or not. 
        // if it exists then it set the 'bookmarked' property of the recipe to true otherwise false.
        if(state.bookmarks.some(bookmark=>bookmark.id === hashID)){
            state.recipe.bookmarked = true;
        
        }
        else {
            state.recipe.bookmarked = false;
        }
    }
    catch(err){
    
        throw err;
       // console.log(err);
    }

    


    
}

// adding bookmarks to local storage
const persistBookmark = function(){
    console.log('persist bookmarks');
    localStorage.setItem('bookmark', JSON.stringify(state.bookmarks));
}

/// This function only loads the results, the list of recipies. 
export const loadSearchResult = async function(query){
    try{
        state.search.query = query;
        // storing the JSON data into data and puts into  the results array. Which are displayed to the page by render() function of another class.
        // the '&key=${KEY}' in the URL helps to get the uploaded recipe in the search results.
        const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
    
        
        state.search.result = data.data.recipes.map(rec=>{
          return {
            id: rec.id,
            title: rec.title,
            publisher: rec.publisher,
            image:rec.image_url,
            ...(rec.key && {key:rec.key})
          }
            
        });
        state.search.page = 1;
    }
    catch(err){
        console.log(err);
        throw err;
    }
    

};

/// this methods retrives 10 items from an array from the provided "page" number.
export const getSearchResultsPage = function(page=state.search.page){
    state.search.page = page
    const start = (page - 1) * state.search.resultsPerPage
    const end = page * state.search.resultsPerPage;

    return state.search.result.slice(start, end);

}

export const updateServings = function(newServings){

    state.recipe.ingredients.forEach(ingredient => {
        ingredient.quantity = (ingredient.quantity * newServings) / state.recipe.servings;
        
    });
    state.recipe.servings = newServings;


};

export const addBookmarks = function(recipe){

    state.bookmarks.push(recipe);
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmark();
}

export const deleteBookmarks = function(id){
    // findin the index of the bookmark that we want to delete.
    const index = state.bookmarks.findIndex(element=> element.id === id);
    state.bookmarks.splice(index,1);
    if(id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmark();

}

const init = function(){
    const storage = localStorage.getItem('bookmark');
    if(storage) state.bookmarks = JSON.parse(storage);
}
init();

const clearBookMarks = function(){
    localStorage.clear('bookmark');
}
//clearBookMarks();

// function for uploading Recipe
export const uploadRecipe = async function(newRecipe){
    try {
        // const ingredients = Object.entries
        const ingredients = Object.entries(newRecipe).filter(entry=>{
            return entry[0].startsWith('ingredient') && entry[1] !== '';
        }).map(ing=>{
            const ingArr = ing[1].split(',').map(el => el.trim());
            //const ingArr = ing[1].replaceAll(' ', '').split(',');

            if(ingArr.length !== 3){
                throw new Error(
                    'Wrong ingredients format! Please use the correct format :)'
                );
            }
            const [quantity, unit, description] = ingArr;
            return {quantity : quantity ?  +quantity : null, unit, description};
        })

        // the order of properties of the recipe object 
        // should be the same as it was recieved from the API
        // the order in the recipe object of the state object may be is different from the way it was recieved.
        const recipe = {
            title:newRecipe.title,
            source_url:newRecipe.sourceUrl,
            image_url:newRecipe.image,
            publisher:newRecipe.publisher,
            cooking_time:+newRecipe.cookingTime,
            servings:+newRecipe.servings,
            ingredients,

        };
        const data = await  sendJSON(`${API_URL}?key=${KEY}`,recipe)
        state.recipe = createRecipeObject(data);
        addBookmarks(state.recipe);

    }
    catch(err){
        throw err;
    }
   
}

