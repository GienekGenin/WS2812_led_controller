const express = require('express');
let router = express.Router();
const request = require('request');
const mongojs = require('mongojs');
const db = mongojs('mongodb://Gennadii:1q2w120195@ds151259.mlab.com:51259/ws2812', ['usersData', 'tokens']);

let token;

function getUpdates() {
  db.tokens.findOne(function (err, data) {
    if (err) {
    }
    token = data.telegram;
  });
  request({
    url: token,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      body.result.map((element, i) => {
        if (element.message.from.username === 'gendos123') {
          db.usersData.findAndModify({
            query: {username: 'gendos123'},
            update: {$set: {data: element.message.text}},
            new: true
          }, function (err, doc, lastErrorObject) {
          })
        }
      });
    }
  });
}

router.get('/', function (req, res, next) {
  getUpdates();
  db.usersData.find(function (err, docs) {
    res.json(docs[1].data);
  });
});

module.exports = router;
