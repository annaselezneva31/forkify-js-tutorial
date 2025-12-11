import { API_URL, API_KEY, RESULTS_PER_PAGE } from './config.js';
// import { async } from 'regenerator-runtime';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
  userRecipes: [],
};

const createRecipeObject = function (data) {
  return {
    id: data.id,
    title: data.title,
    publisher: data.sourceName,
    sourceURL: data.sourceUrl,
    image: data.image,
    servings: data.servings,
    cookingTime: data.readyInMinutes,
    ingredients: data.extendedIngredients,
    // ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    // if (state.userRecipes.some(rec => rec.id === +id)) {
    //   state.recipe =
    //     state.userRecipes[state.userRecipes.findIndex(el => el.id === +id)];
    // } else {
    //   const data = await AJAX(
    //     `${API_URL}${id}/information?includeNutrition=false&apiKey=${API_KEY}`
    //   );

    //   state.recipe = createRecipeObject(data);
    // }

    /////////////
    const data = {
      id: 662605,
      title: 'Sweet Potato, Sausage and Caramelized Onion Pizza',
      publisher: 'Foodista',
      sourceURL:
        'https://www.foodista.com/recipe/L22DJCK8/sweet-potato-sausage-and-caramelized-onion-pizza',
      image: 'https://img.spoonacular.com/recipes/662605-556x370.jpg',
      servings: 8,
      cookingTime: 45,
      ingredients: [
        {
          id: 93610,
          aisle: 'Refrigerated',
          image: 'pizza-dough.jpg',
          consistency: 'SOLID',
          name: 'pizza dough',
          nameClean: 'pizza dough',
          original: '1 pizza dough',
          originalName: 'pizza dough',
          amount: 1,
          unit: '',
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 1,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 11215,
          aisle: 'Produce',
          image: 'garlic.png',
          consistency: 'SOLID',
          name: 'garlic',
          nameClean: 'garlic',
          original: '1 head garlic, unpeeled',
          originalName: 'garlic, unpeeled',
          amount: 1,
          unit: 'head',
          meta: ['unpeeled'],
          measures: {
            us: {
              amount: 1,
              unitShort: 'head',
              unitLong: 'head',
            },
            metric: {
              amount: 1,
              unitShort: 'head',
              unitLong: 'head',
            },
          },
        },
        {
          id: 11507,
          aisle: 'Produce',
          image: 'sweet-potato.png',
          consistency: 'SOLID',
          name: 'sweet potatoes',
          nameClean: 'sweet potatoes',
          original: '2 sweet potatoes, with peel',
          originalName: 'sweet potatoes, with peel',
          amount: 2,
          unit: '',
          meta: ['with peel'],
          measures: {
            us: {
              amount: 2,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 2,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 4053,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'olive-oil.jpg',
          consistency: 'LIQUID',
          name: 'olive oil',
          nameClean: 'olive oil',
          original: '1 1/2 tablespoons olive oil',
          originalName: 'olive oil',
          amount: 1.5,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: {
              amount: 1.5,
              unitShort: 'Tbsps',
              unitLong: 'Tbsps',
            },
            metric: {
              amount: 1.5,
              unitShort: 'Tbsps',
              unitLong: 'Tbsps',
            },
          },
        },
        {
          id: 7036,
          aisle: 'Meat',
          image: 'raw-pork-sausage.png',
          consistency: 'SOLID',
          name: 'sausage links',
          nameClean: 'sausage links',
          original: '2 Italian sausage links, sliced thinly*',
          originalName: 'Italian sausage links, sliced thinly',
          amount: 2,
          unit: '',
          meta: ['italian', 'sliced'],
          measures: {
            us: {
              amount: 2,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 2,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 10011282,
          aisle: 'Produce',
          image: 'red-onion.png',
          consistency: 'SOLID',
          name: 'onions',
          nameClean: 'onions',
          original: '2 red onions, sliced thinly',
          originalName: 'red onions, sliced thinly',
          amount: 2,
          unit: '',
          meta: ['red', 'sliced'],
          measures: {
            us: {
              amount: 2,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 2,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 10014037,
          aisle: 'Alcoholic Beverages',
          image: 'bourbon.png',
          consistency: 'LIQUID',
          name: 'bourbon',
          nameClean: 'bourbon',
          original: '1 tablespoon bourbon',
          originalName: 'bourbon',
          amount: 1,
          unit: 'tablespoon',
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
            metric: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
          },
        },
        {
          id: 19334,
          aisle: 'Baking',
          image: 'light-brown-sugar.jpg',
          consistency: 'SOLID',
          name: 'brown sugar',
          nameClean: 'brown sugar',
          original: '1 tablespoon brown sugar',
          originalName: 'brown sugar',
          amount: 1,
          unit: 'tablespoon',
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
            metric: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
          },
        },
        {
          id: 14412,
          aisle: 'Beverages',
          image: 'water.png',
          consistency: 'LIQUID',
          name: 'water',
          nameClean: 'water',
          original: '1 tablespoon water',
          originalName: 'water',
          amount: 1,
          unit: 'tablespoon',
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
            metric: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
          },
        },
        {
          id: 1017,
          aisle: 'Cheese',
          image: 'cream-cheese.jpg',
          consistency: 'SOLID',
          name: 'cream cheese',
          nameClean: 'cream cheese',
          original: '4 ounces cream cheese**',
          originalName: 'cream cheese',
          amount: 4,
          unit: 'ounces',
          meta: [],
          measures: {
            us: {
              amount: 4,
              unitShort: 'oz',
              unitLong: 'ounces',
            },
            metric: {
              amount: 113.398,
              unitShort: 'g',
              unitLong: 'grams',
            },
          },
        },
        {
          id: 2063,
          aisle: 'Produce',
          image: 'rosemary.jpg',
          consistency: 'SOLID',
          name: 'rosemary',
          nameClean: 'rosemary',
          original: '1 tablespoon fresh rosemary',
          originalName: 'fresh rosemary',
          amount: 1,
          unit: 'tablespoon',
          meta: ['fresh'],
          measures: {
            us: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
            metric: {
              amount: 1,
              unitShort: 'Tbsp',
              unitLong: 'Tbsp',
            },
          },
        },
        {
          id: 1082047,
          aisle: 'Spices and Seasonings',
          image: 'salt.jpg',
          consistency: 'SOLID',
          name: 'kosher salt',
          nameClean: 'kosher salt',
          original: '1/4 teaspoon kosher salt',
          originalName: 'kosher salt',
          amount: 0.25,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: {
              amount: 0.25,
              unitShort: 'tsps',
              unitLong: 'teaspoons',
            },
            metric: {
              amount: 0.25,
              unitShort: 'tsps',
              unitLong: 'teaspoons',
            },
          },
        },
        {
          id: 9152,
          aisle: 'Produce',
          image: 'lemon-juice.jpg',
          consistency: 'LIQUID',
          name: 'lemon juice',
          nameClean: 'lemon juice',
          original: 'Dash of lemon juice',
          originalName: 'lemon juice',
          amount: 1,
          unit: 'Dash',
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: 'Dash',
              unitLong: 'Dash',
            },
            metric: {
              amount: 1,
              unitShort: 'Dash',
              unitLong: 'Dash',
            },
          },
        },
        {
          id: 11959,
          aisle: 'Produce',
          image: 'arugula-or-rocket-salad.jpg',
          consistency: 'SOLID',
          name: 'arugula',
          nameClean: 'arugula',
          original: '1 1/2 cups fresh arugula',
          originalName: 'fresh arugula',
          amount: 1.5,
          unit: 'cups',
          meta: ['fresh'],
          measures: {
            us: {
              amount: 1.5,
              unitShort: 'cups',
              unitLong: 'cups',
            },
            metric: {
              amount: 30,
              unitShort: 'g',
              unitLong: 'grams',
            },
          },
        },
      ],
    };

    state.recipe = {
      id: data.id,
      title: data.title,
      publisher: data.publisher,
      sourceURL: data.sourceUrl,
      image: data.image,
      servings: data.servings,
      cookingTime: data.cookingTime,
      ingredients: data.ingredients,
    };

    /////////////
    console.log(state.recipe);
    if (state.bookmarks.some(bookmark => bookmark.id === +id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    console.log(state.recipe);
  } catch (err) {
    // Temp handling error
    // console.error(`${err} 🔴🔴🔴`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    /*
    const data = await getJSON(
      `${API_URL}/complexSearch?query=${query}&number=50&apiKey=${API_KEY}`
    );
    console.log(data);

    state.search.results = data.results.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
      };
    });
    console.log(state.search.results);
    */
    // /*
    const result = [
      {
        id: 662605,
        title: 'Sweet Potato, Sausage and Caramelized Onion Pizza',
        image: 'https://img.spoonacular.com/recipes/662605-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 645020,
        title: 'Golden Potato and Caramelized Onion Flat Bread Pizza',
        image: 'https://img.spoonacular.com/recipes/645020-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 680975,
        title: 'BLT Pizza',
        image: 'https://img.spoonacular.com/recipes/680975-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 651624,
        title: 'Mexican Fiesta Salad Pizza',
        image: 'https://img.spoonacular.com/recipes/651624-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 654523,
        title: 'Paneer & Fig Pizza',
        image: 'https://img.spoonacular.com/recipes/654523-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 665769,
        title: 'Zucchini Pizza Boats',
        image: 'https://img.spoonacular.com/recipes/665769-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 651956,
        title: 'Mini eggplant pizza',
        image: 'https://img.spoonacular.com/recipes/651956-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 716300,
        title: 'Plantain Pizza',
        image: 'https://img.spoonacular.com/recipes/716300-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 647124,
        title: 'Homemade Thin Crust Pizza + Pesto + Potato',
        image: 'https://img.spoonacular.com/recipes/647124-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 655847,
        title: 'Pesto Veggie Pizza',
        image: 'https://img.spoonacular.com/recipes/655847-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 663366,
        title: 'Thin Crust Genoa Salami Pizza',
        image: 'https://img.spoonacular.com/recipes/663366-312x231.png',
        imageType: 'png',
      },
      {
        id: 642371,
        title:
          'Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion',
        image: 'https://img.spoonacular.com/recipes/642371-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 1095810,
        title: 'Buffalo Mozzarella & Pepperoni Pizza with a Cauliflower Crust',
        image: 'https://img.spoonacular.com/recipes/1095810-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 662264,
        title: 'summer vegetable pizza',
        image: 'https://img.spoonacular.com/recipes/662264-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 636593,
        title: 'Butternut Squash Pizza',
        image: 'https://img.spoonacular.com/recipes/636593-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 663553,
        title: 'Tomato and Bacon Pizza With Rice Crust',
        image: 'https://img.spoonacular.com/recipes/663553-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 1096319,
        title: 'Mini Vegetarian Puff Pastry Pizzas',
        image: 'https://img.spoonacular.com/recipes/1096319-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 637054,
        title: 'Caramelized Onion and Bacon Pizza',
        image: 'https://img.spoonacular.com/recipes/637054-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 661640,
        title: 'Stilton Balsamic Pizza',
        image: 'https://img.spoonacular.com/recipes/661640-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 644953,
        title: 'Goat Cheese Pesto Pizza',
        image: 'https://img.spoonacular.com/recipes/644953-312x231.jpg',
        imageType: 'jpg',
      },
    ];

    // const result = [];
    state.search.results = result.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
    // console.log(state.search.results);
    // */
  } catch (err) {
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.amount = (ing.amount * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe, place = 'end') {
  // Add bookmark
  if (place !== 'end') state.bookmarks.unshift(recipe);
  else state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  // Save in local storage
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as not bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  // Save in local storage
  persistBookmarks();
};

const persistNewRecipe = function () {
  localStorage.setItem('userRecipes', JSON.stringify(state.userRecipes));
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format'
          );

        const [amount, unit, name] = ingArr;
        // console.log({ amount: amount ? +amount : null, unit, name });
        return { amount: amount ? +amount : null, unit, name };
      });

    // My interpretation with local storage
    const newRec = Object.fromEntries(
      Object.entries(newRecipe).filter(
        entry => !entry[0].startsWith('ingredient') && entry[1] !== ''
      )
    );
    state.recipe = {
      id: state.userRecipes.at(-1)?.id ? state.userRecipes.at(-1).id + 1 : 1,
      ...newRec,
      ingredients,
      key: 'user recipe',
    };

    console.log(state.recipe);

    state.userRecipes.push(state.recipe);
    addBookmark(state.userRecipes.at(-1), 'begin');
    persistNewRecipe();
    ////////////////////

    //////////////////// If initial API had worked
    // const recipe = {
    //   title: newRecipe.title,
    //   sourceName: newRecipe.publisher,
    //   sourceUrl: newRecipe.sourceUrl,
    //   image: newRecipe.image,
    //   servings: +newRecipe.servings,
    //   readyInMinutes: +newRecipe.cookingTime,
    //   extendedIngredients: ingredients,
    // };
    // console.log(recipe);
    // // Wrong URL!!!
    // const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    // console.log(data);
    // state.recipe = createRecipeObject(data);
    // addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const storageBookmarks = localStorage.getItem('bookmarks');
  if (storageBookmarks) state.bookmarks = JSON.parse(storageBookmarks);

  const storageUserRecipe = localStorage.getItem('userRecipes');
  if (storageUserRecipe) state.userRecipes = JSON.parse(storageUserRecipe);
};

init();

////////////////////// for developing
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
const clearUserRecipes = function () {
  localStorage.clear('userRecipes');
};
// clearBookmarks();
// clearUserRecipes();
