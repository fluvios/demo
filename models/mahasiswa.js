var db = require('../config/database');

var mahasiswa = {
    
    // Get all data
    getMahasiswa:function(callback){
        return db.query("select * from mahasiswa", callback);
    },

    // Search data
    searchMahasiswa:function(id, callback){
        return db.query("select * from mahasiswa where id=?", [id], callback);
    },

    // Create data
    createMahasiswa:function(mahasiswa, callback){
        return db.query("insert into mahasiswa (nim,nama,jurusan) values (?,?,?)"
        ,[mahasiswa.nim,mahasiswa.nama,mahasiswa.jurusan]
        ,callback);
    },

    // Delete data
    deleteMahasiswa:function(id, callback){
        return db.query("delete from mahasiswa where id=", [id], callback);
    },

    // Update data
    updateMahasiswa:function(id, mahasiswa, callback){
        return db.query("update mahasiswa set nim = ?, nama = ?, jurusan=? where id=?"
        ,[mahasiswa.nim,mahasiswa.nama,mahasiswa.jurusan,id]
        ,callback);
    }

};

module.exports = mahasiswa;