// local json server:
const apiRoot = 'https://api.boardgameatlas.com/api/';
const apiSearch = 'search?';
const apiListId = 'list_id=eDRVqFJyIP' + '&'
const searchFieldsArray = [
    'id',
    'url',
    'name',
    'year_published',
    'min_players',
    'max_players',
    'min_playtime',
    'max_playtime',
    'min_age',
    'thumb_url',
    'image_url',
    // 'mechanics',
    // 'categories',
    'description_preview'
];
const apiSearchFields = 'fields=' + searchFieldsArray.toString() + '&';
const apiSortOrder = 'order_by=name' + '&';
const apiClientId = 'client_id=Wckq3Hq5Er';

const apiCategoryUrl = 'game/categories?'
const apiMechanicUrl = 'game/mechanics?'

// export const apiGames = apiRoot + apiSearch + apiListId + apiSearchFields + apiSortOrder + apiClientId;
export const apiGames = apiRoot + apiSearch + apiListId + apiSortOrder + apiClientId;
console.log(apiGames);

/*
    each of the following return an array of objects:
    {
        id: unique alphanumeric key belonging to category / mechanic
        name: name of category / mechanic
        url: links to list of games that have that category / mechanic
    }
*/
export const apiCategories = apiRoot + apiCategoryUrl + apiClientId;
export const apiMechanics = apiRoot + apiMechanicUrl + apiClientId;