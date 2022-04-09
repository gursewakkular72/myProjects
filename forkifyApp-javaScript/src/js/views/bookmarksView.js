import View from './View.js';
import PreviewView from './PreviewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
    

    // This method return an the HTML markup, containing the list of the received results(recipes), a string of all the recipes;
    // How is this method working ? 
    // So, this is how it works- when PreviewView.render is called, it basically calls the render
    // method defined in the View Parent class. Since the second parameter in the render 
    // call in the below method is false, the render method in the View class keeps returning 'this._markup' and the below
    // method ends up with a string of 'this.markup[s]'. and when update() or render() method, defined inside the view
    // class, are called without the second parameter in the controller.js they gets the the 'markup; from the following call of the _generalMarkup() and displays the results on the page.

    _generalMarkup(){
        return this._data.map( bookmark => PreviewView.render(bookmark,false)).join('');
        
    }
    
    /// adding handler to load the recipes from the bookmarks array right after the page loads
     addHandleRender = function (handler){
         window.addEventListener('load', function(){
             handler()
         })

    }
}

export default new BookmarksView();