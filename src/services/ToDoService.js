var express = require("express");
var conn = require('../database/Config');
var {success,error} = require('../commonresponse/CommonResponse');
var app = express();
var ToDo = require('../models/ToDo');

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

function getListToDo(req, res){
    ToDo.findAll().then(data =>{
        res.json(success(data));
    });
}

function findToDoById(req, res){
    ToDo.findByPk(req.params.id).then(data =>{
        res.json(success(data));
    }).catch(err =>{
        res.json(error(err));
    })
}

function createToDo(req, res){
    ToDo.create(req.body).then(data=>{
        return res.json(success(data));
    }).catch(err =>{
        return res.json(error(err));
    })
}


function updateToDo(req, res){
    ToDo.findOne({where: {id: req.params.id}}).then(data =>{
        if(data){
            return data.update(req.body);
        }else {
            throw Error("ToDo not Found");
        }
    }).then(data =>{
        res.json(success(data));  
    }).catch(err =>{
        res.json(error(err));
    })
}

function deleteToDo(req, res){
    ToDo.destroy({where: { id: req.params.id }}).then(data =>{
        res.json(success(data));
    }).catch(err =>{
        res.json(error(err));
    })
}

module.exports = { getListToDo, findToDoById, createToDo, updateToDo, deleteToDo };