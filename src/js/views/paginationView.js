import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1
    if (curPage === 1 && numPages > 1) {
      return this._generateBtn('plus', curPage);
    }

    // Other pages
    if (curPage < numPages) {
      return (
        this._generateBtn('minus', curPage) + this._generateBtn('plus', curPage)
      );
    }

    // Page Last
    if (curPage === numPages && numPages > 1) {
      return this._generateBtn('minus', curPage);
    }
    // Page 1, there are no other pages
    return '';
  }

  _generateBtn(state, page) {
    const leftRight = state === 'minus' ? 'left' : 'right';
    const prevNext = state === 'minus' ? 'prev' : 'next';
    const nextPage = state === 'minus' ? page - 1 : page + 1;
    return `
            <button data-goto="${nextPage}" class="btn--inline pagination__btn--${prevNext}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${leftRight}"></use>
            </svg>
            <span>Page ${nextPage}</span>
        </button>
    `;
  }
}

export default new PaginationView();
