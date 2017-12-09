var express = require('express');
var router = express.Router();
var mahasiswa = require('../models/mahasiswa');

// Route GET
router.get('/:id', function(req,res,next){
    if (req.params.id) {
        mahasiswa.searchMahasiswa(req.params.id, function(err, rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        mahasiswa.getMahasiswa(function(err, rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});

// Route POST
router.post('/', function(req,res,next){
    mahasiswa.createMahasiswa(function(err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

// Route DELETE
router.delete('/:id', function(req,res,next){
    mahasiswa.deleteMahasiswa(function(err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

// Route PUT
router.put('/:id', function(req,res,next){
    mahasiswa.updateMahasiswa(req.params.id, req.body, function(err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
