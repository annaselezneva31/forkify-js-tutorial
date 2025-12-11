import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import paginationView from './views/paginationView.js';

///////////////////////////////////////
if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function (e) {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // console.log(id);
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultPage());

    // 1) loading recipe
    await model.loadRecipe(id);
    // const recipe = model.state.recipe;

    // 2) Updating bookmark view
    bookmarksView.update(model.state.bookmarks);

    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // console.log(err);
    recipeView.renderError(`${err} 🔴🔴🔴`);
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    // console.log(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    // 4) Render initial pagination button
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render  NEW results
  resultsView.render(model.getSearchResultPage(goToPage));

  // 2) Render initial pagination button
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  // console.log(model.state.recipe);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload new recipe
    await model.uploadRecipe(newRecipe);
    // console.log(model.state.recipe);

    // Render new recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back()

    // Close form window
    // setTimeout(function () {
    //   addRecipeView.toggleWindow();
    // }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(`🔴 ${err}`);
    addRecipeView.renderError(err.message);
  }
};

const newFeature = function () {
  console.log('Welcome!');
};

// Publisher-subscriber method
const init = function () {
  bookmarksView.addHandlerRenderBookmarks(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

// Improvments
// Display number of pages between the pagination buttons
// Ability to sort search results by duration or number of ingridients
// Perform ingredient validation in view, before submitting the form
// Improve recipe ingr input: separate in multiple fields and allow more than 6 nigr
// Shopping list feature: button on recipe to add ingr to a list
// Weekly meal planning feature: assign recipes to the next 7 days and show on a weekly calendar
// Get nutrition data on each ingr and calculate total calories of recipe
