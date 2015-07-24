var Model = require('./model')
  , query = ''
  , msg = ''
  , Controller = {
      create: function(req, res) {
        var dados = req.body
          , model = new Model(dados);
        model.save(function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , retrieve: function(req, res) {
        Model.find(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , get: function(req, res) {
        var query = {_id: req.params.id};
        Model.findOne(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , update: function(req, res) {
        var query = {_id: req.params.id}
          , mod = req.body;

        Model.update(query, mod, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , delete: function(req, res) {
        query = {name: /brahma/i};

        Model.remove(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    }
  ;

module.exports = Controller;



