import icons from 'url:../../img/icons.svg'; // importing icons

export default class View{
    _data;
    render(data, render = true){
        if(!data || Array.isArray(data) && data.length === 0) return this.renderError();
        //console.log('from here it does too');
        this._data = data;
        this._markup = this._generalMarkup();
        if(render===false) return this._markup;
      
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',this._markup);
       

    }

    // THis method updates the just the content on the righ side which has changes by adjusting the number of 
    // servings. 
    // This method crates a virtual DOM, which exits in memory, based on the changes made by adjusting number of servings and then compares it to the 
    // the actual DOM that exits on the page. 
    update(data) {
      this._data = data;
      const newMarkup = this._generalMarkup();
      //the createRange method - it basically creates a range object, which reprsents a fragment of a document.
      // the createContextualFragment - it basically returns that document fragment by invoking the HTML parsing.
      const newDOM = document.createRange().createContextualFragment(newMarkup);
      const newElements = Array.from(newDOM.querySelectorAll('*'));
      const curElements = Array.from(this._parentElement.querySelectorAll('*'));
  
      newElements.forEach((newEl, i) => {
        const curEl = curElements[i];
  
        // Updates changed TEXT
        if (
          //checkes if the nodes are not equal.
          !newEl.isEqualNode(curEl) &&
          //Node.values will returns or set the value of the current node. This property returns the content of the 'text' node, if the node is not a 'text'
          // it returns 'null' in most of the cases.
          newEl.firstChild?.nodeValue.trim() !== ''
        ) {
          // console.log('💥', newEl.firstChild.nodeValue.trim());
          curEl.textContent = newEl.textContent;
        }
  
        // Updates changed ATTRIBUES
        if (!newEl.isEqualNode(curEl))
          Array.from(newEl.attributes).forEach(attr =>
            curEl.setAttribute(attr.name, attr.value)
          );
      });
    }
    ///clears the innerHTML.
    _clear(){
        this._parentElement.innerHTML = '';
    }
    renderSpinner(){
        const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`
        this._clear();
        this._parentElement.insertAdjacentHTML(`afterbegin`,markup);
      
      }
      _generateIngredients(item){
        return `
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${item.quantity ? (new Fraction(item.quantity).toString()):''}</div>
            <div class="recipe__description">
            <span class="recipe__unit">${item.unit}</span>
            ${item.description}
            </div>
        </li>`
     }
     renderMessage(message=this._message){ 
        const markup =  `
                <div class="message">
                    <div>
                        <svg>
                        <use href="${icons}#icon-smile"></use>
                        </svg>
                    </div>
                    <p>${message}</p>
                </div>`
      this._clear()
      this._parentElement.insertAdjacentHTML('afterbegin',markup);
      }

      renderError(message=this._errorMessage){
        const markup =  `
     <div class="error">
         <div>
             <svg>
             <use href="${icons}#icon-alert-triangle"></use>
             </svg>
         </div>
         <p>${message}</p>
      </div>`
      this._clear()
      this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
}