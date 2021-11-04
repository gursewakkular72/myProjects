import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');
    
    addHandlerClick(handler){
        this._parentElement.addEventListener('click', function(e){
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;
            const goToPage = +btn.dataset.goto;
          
            handler(goToPage);
        })
    }

    _generalMarkup(){
        let currentPage = this._data.page;
        const numOfPages = Math.ceil(this._data.result.length/this._data.resultsPerPage);
        
    // page 1, and there are other pages
    if(currentPage ===1 && numOfPages > 1){
        return `
        <button data-goto="${currentPage+1}"  class="btn--inline pagination__btn--next">
            <span>Page ${currentPage+1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
         </button>`;
    
    }
    

    // last page
    if(currentPage === numOfPages && numOfPages > 1){
        return `
        <button data-goto="${currentPage-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage-1}</span>
        </button>
        `;
    }

    // other page
    if(currentPage < numOfPages){
        return `
        <button data-goto="${currentPage-1}"  class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage-1}</span>
        </button>
        <button data-goto="${currentPage+1}"  class="btn--inline pagination__btn--next">
        <span>Page ${currentPage+1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    return ''

    }


    


}

export default new PaginationView();