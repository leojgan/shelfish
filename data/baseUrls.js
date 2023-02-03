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

/*
apiGames = {
    count: {total # of games in list},
    games: [array of {game objects with props equal to values in searchFieldsArray}]
}
*/

export const apiGames = apiRoot + apiSearch + apiListId + apiSearchFields + apiSortOrder + apiClientId;
console.log(apiGames);