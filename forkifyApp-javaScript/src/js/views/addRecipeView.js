import View from './View.js';
import PreviewView from './PreviewView.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');
    _errorMessage = `Unable to find what you are looking for, please try somethin else :)`;
    _message = 'Recipe was successfully uploaded';

    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    constructor(){
        super();
        this._addHanlerShowWindow();
        this._addHandlerHideWindow();
    }

    toggleWindow(){
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
       // console.log('this is being clicked');
    }

    _addHanlerShowWindow(){
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
        
    }

    _addHandlerHideWindow(){
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click',this.toggleWindow.bind(this));
    }

    addHandlerUpload(handler){
        this._parentElement.addEventListener('submit', function(e){
            e.preventDefault();
            const dataArr =  [... new FormData(this)]; /// the Form Data is an API to get the Data submitted via Form. 
            // "this" keyword in the above line of code refers to the this._parentElement
            const data = Object.fromEntries(dataArr); // converitng the the dataArr array to object.
            handler(data)

        })
    }

    

     _generalMarkup(){
        
    }
    

    
}

export default new AddRecipeView();