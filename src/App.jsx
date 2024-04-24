import './App.css'
import React from 'react'

import cfb from 'cfb.js';


var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = `Bearer${process.env.CFBD_API_KEY}`;

var api = new cfb.BettingApi()

var opts = {
  'gameId': 56, // {Number} Game id filter
  'year': 56, // {Number} Year/season filter for games
  'week': 56, // {Number} Week filter
  'seasonType': "regular", // {String} Season type filter (regular or postseason)
  'team': "team_example", // {String} Team
  'home': "home_example", // {String} Home team filter
  'away': "away_example", // {String} Away team filter
  'conference': "conference_example" // {String} Conference abbreviation filter
};
let bettingInfo = null; // or undefined, depending on your use case
api.getLines(opts).then(function (data) {
  console.log('API called successfully. Returned data: ' + data);
  bettingInfo = data;
}, function (error) {
  console.error(error);
});


function App() {

  return (
    <>
      <h1>College Football Stats</h1>
      <p>Here is your betting info: {bettingInfo}</p>
    </>
  )
}

export default App
