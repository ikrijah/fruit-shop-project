const express = require('express');
const router = express.Router();
const Post = require('../models/model');
require('dotenv').config();


// Connection à la database
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Router pour lister tous les documents de la collection de la base de données
router.get('/list',async(req,res)=>{
    try{
        // Connection
        await client.connect(err=>{
          // Action sur la collection fruits
          const collection = client.db("myDatabase").collection("fruits");
          // Recherche de tous les documents dans fruits
          collection.find().toArray(function(err,docs){
            // Debug
            console.log(docs);
            // Resultat
            res.json(docs);
            });
          });
    }catch(err){
        res.json({message:err});
    }
});

// Router afin de faire le transfer des fruits 
router.post('/edit', async(req,res)=>{
  console.log("backend : "+JSON.stringify(Number(req.body.stock.orange)))
try {
  await client.connect(err => {

    // Actions sur les collections d'objet (collection fruits)
    const collection = client.db("myDatabase").collection("fruits");

    // Recherche du document du magasin source (d'où on prélève les stocks)
    collection.findOne({shopLocation:req.body.shopLocation}, function(err, origindocs){

      // Calcul des stocks à remplacer dans ce document (nombre de stocks présent - nombre donné en input par l'utilisateur)
      orangeChange= Number(origindocs.stock.orange) -Number(req.body.stock.orange);
      bananeChange= Number(origindocs.stock.banane) -Number(req.body.stock.banane);
      pommeChange= Number(origindocs.stock.pomme) -Number(req.body.stock.pomme);
      fraiseChange= Number(origindocs.stock.fraise) -Number(req.body.stock.fraise);
      ceriseChange= Number(origindocs.stock.cerise) -Number(req.body.stock.cerise);
      
      // Si la somme des stocks calculé est supérieur ou égal à zéro, on pourra alors ajouter ou enlever des stocks
      if (orangeChange>=0 && bananeChange>=0 && pommeChange>=0 && fraiseChange>=0 && ceriseChange>=0 ){
        
        // Initialisation pour l'insertion dans la base de données
        const coll = client.db("myDatabase").collection("fruits");
        const query = { shopLocation:req.body.shopLocation};
        const update = { $set: {
          "shopLocation" : req.body.shopLocation,
          "stock" : {
              "orange":orangeChange,
              "banane":bananeChange,
              "pomme":pommeChange,
              "fraise":fraiseChange,
              "cerise":ceriseChange
          }
        }};
        const options = { upsert: true };

        // Remplacement des données dans la bdd
        coll.updateOne(query, update, options);

        // Recherche du magasin de destination (d'où on rajoute les stocks)
        collection.findOne({shopLocation:req.body.shopLocationDestination},function(err, docs){

          // Calcul des stocks (nombre de stock présent + nombre donné en input par l'utilisateur)
          var orangeDest = Number(docs.stock.orange) + Number(req.body.stock.orange);
          var bananeDest = Number(docs.stock.banane) + Number(req.body.stock.banane);
          var pommeDest = Number(docs.stock.pomme) + Number(req.body.stock.pomme);
          var fraiseDest = Number(docs.stock.fraise) + Number(req.body.stock.fraise);
          var ceriseDest = Number(docs.stock.cerise) + Number(req.body.stock.cerise);

          // Initialisation pour l'insertion dans la base de données
          const coll = client.db("myDatabase").collection("fruits");
          const query = { shopLocation:req.body.shopLocationDestination};
          const update = { $set: {
            "shopLocation" : req.body.shopLocationDestination,
            "stock" : {
                "orange":orangeDest,
                "banane":bananeDest,
                "pomme":pommeDest,
                "fraise":fraiseDest,
                "cerise":ceriseDest
            }
          }};
          const options = { upsert: true };
          // Update de la bdd
          coll.updateOne(query, update, options);
        });
        var messageString = "La requête a bien été lancée : les données des stocks de  "+req.body.shopLocation+ " et de "+ req.body.shopLocationDestination+ " ont bien été mis à jour.";
        res.json({message:messageString});
      }else{
        res.json({message:"Vous demandez de retirer un nombre trop important de fruits par rapport à ce qu'il y a en stock. Votre requête n'a pas été envoyée. Veuillez réessayer."})
      }

    });

  });
  }catch (err) {
  throw new Error('Unable to Connect to Database')
  };
});


// Router afin d'ajouter ou de soustraire des stocks de fruits dans la bdd
router.post('/add', async(req,res)=>{
  try {
    // Connection
    await client.connect(err => {
      // Actions sur les collections d'objet
      const collection = client.db("myDatabase").collection("fruits");

      // Recherche du magasin pour ajouter ou enlever des stocks de fruits
      collection.findOne({shopLocation:req.body.shopLocation},function(err, docs){

        // Calcul des stocks à remplacer dans la base de données (nombre de fruits déjà en stock + nombre de fruit donné par l'utilisateur)
        var orangeDest = Number(docs.stock.orange) + Number(req.body.stock.orange);
        var bananeDest = Number(docs.stock.banane) + Number(req.body.stock.banane);
        var pommeDest = Number(docs.stock.pomme) + Number(req.body.stock.pomme);
        var fraiseDest = Number(docs.stock.fraise) + Number(req.body.stock.fraise);
        var ceriseDest = Number(docs.stock.cerise) + Number(req.body.stock.cerise);


        // Si la somme des stocks calculé est supérieur ou égal à zéro, on pourra alors ajouter ou enlever des stocks
        if (orangeDest>=0 && bananeDest>=0 && pommeDest>=0 && fraiseDest>=0 && ceriseDest>=0 ){
          console.log("orange destination "+ orangeDest);
          const coll = client.db("myDatabase").collection("fruits");
          const query = { shopLocation:req.body.shopLocation};
          const update = { $set: {
            "shopLocation" : req.body.shopLocation,
            "stock" : {
                "orange":orangeDest,
                "banane":bananeDest,
                "pomme":pommeDest,
                "fraise":fraiseDest,
                "cerise":ceriseDest
            }
          }};
          const options = { upsert: true };
          coll.updateOne(query, update, options);

          res.json({message:"Ajout ou retrait de stock réussi."});
        }
        // Sinon, si la somme des stocks calculés est inférieur à zéro, on ne lancera pas la requête
        // (car on ne peut pas avoir de stock négatif)
        else{
          res.json({message:"Vous demandez de retirer un nombre trop important de fruits par rapport à ce qu'il y a en stock. Votre requête n'a pas été envoyée. Veuillez réessayer."})
        }
      });
  
    });
  
  }catch(err){
    res.json({message:err});
  }

});



module.exports = router;