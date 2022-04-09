import View from './View.js';
import PreviewView from './PreviewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = `Unable to find what you are looking for, please try somethin else :)`;
    


     // This method return an the HTML markup, containing the list of the received results(recipes), a string of all the recipes;
      // This method return an the HTML markup, containing the list of the received results(recipes), a string of all the recipes;
    // How is this method working ? 
    // So, this is how it works- when PreviewView.render is called, it basically calls the render
    // method defined in the View Parent class. Since the second parameter in the render 
    // call in the below method is false, the render method in the View class keeps returning 'this._markup' and the below
    // method ends up with a string of 'this.markup[s]'. and when update() or render() method, defined inside the view
    // class, are called without the second parameter in the controller.js they gets the the 'markup; from the following call of the _generalMarkup() and displays the results on the page.

     _generalMarkup(){
        return this._data.map( result => PreviewView.render(result,false)).join('');
        
    }
    


    // // This method return an the HTML markup, containing the list of the received results(recipes);
    // _generalMarkup(){
    //     return this._data.map( this.generalMarkupPreview);
        
       
    // }

    // /// returns a single recipe inserted in HTML
    // generalMarkupPreview(data){
    //    const id = window.location.hash.slice(1);
    //     return `
    //     <li class="preview">
    //         <a class="preview__link ${data.id === id ? 'preview__link--active' : ''}" href="#${data.id}">
    //         <figure class="preview__fig">
    //             <img src="${data.image}" alt="Test" />
    //         </figure>
    //         <div class="preview__data">
    //             <h4 class="preview__title">${data.title}</h4>
    //             <p class="preview__publisher">${data.publisher}</p>
                
    //         </div>
    //         </a>
    //     </li>`
    // }
    
}

export default new ResultsView();