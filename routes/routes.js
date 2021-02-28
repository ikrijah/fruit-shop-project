const express = require('express');
const router = express.Router();
const Post = require('../models/model');
require('dotenv').config();


// Connection à la database
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


router.get('/list',async(req,res)=>{
    try{
        await client.connect(err=>{
          const collection = client.db("myDatabase").collection("fruits");
          collection.find().toArray(function(err,docs){
            console.log(docs);
            res.json(docs);
            });
          });
    }catch(err){
        res.json({message:err});
    }
});

router.post('/edit', async(req,res)=>{
  console.log("backend : "+JSON.stringify(Number(req.body.stock.orange)))
try {
  await client.connect(err => {

    // perform actions on the collection object
    const collection = client.db("myDatabase").collection("fruits");

    collection.findOne({shopLocation:req.body.shopLocation}, function(err, origindocs){

      console.log("origin docs stock orange "+origindocs.stock.orange);
      orangeChange= Number(origindocs.stock.orange) -Number(req.body.stock.orange);
      bananeChange= Number(origindocs.stock.banane) -Number(req.body.stock.banane);
      pommeChange= Number(origindocs.stock.pomme) -Number(req.body.stock.pomme);
      fraiseChange= Number(origindocs.stock.fraise) -Number(req.body.stock.fraise);
      ceriseChange= Number(origindocs.stock.cerise) -Number(req.body.stock.cerise);
      
      console.log("origin docs stock orange CHANGE"+orangeChange);
      if (orangeChange>=0 && bananeChange>=0 && pommeChange>=0 && fraiseChange>=0 && ceriseChange>=0 ){
        
        const coll3 = client.db("myDatabase").collection("fruits");
        const query3 = { shopLocation:req.body.shopLocation};
        const update3 = { $set: {
          "shopLocation" : req.body.shopLocation,
          "stock" : {
              "orange":orangeChange,
              "banane":bananeChange,
              "pomme":pommeChange,
              "fraise":fraiseChange,
              "cerise":ceriseChange
          }
        }};
        const options3 = { upsert: true };
        coll3.updateOne(query3, update3, options3);


        collection.findOne({shopLocation:req.body.shopLocationDestination},function(err, docs){
          var orangeDest = Number(docs.stock.orange) + Number(req.body.stock.orange);
          var bananeDest = Number(docs.stock.banane) + Number(req.body.stock.banane);
          var pommeDest = Number(docs.stock.pomme) + Number(req.body.stock.pomme);
          var fraiseDest = Number(docs.stock.fraise) + Number(req.body.stock.fraise);
          var ceriseDest = Number(docs.stock.cerise) + Number(req.body.stock.cerise);

          console.log("orange destination "+ orangeDest);
          const coll2 = client.db("myDatabase").collection("fruits");
          const query2 = { shopLocation:req.body.shopLocationDestination};
          const update2 = { $set: {
            "shopLocation" : req.body.shopLocationDestination,
            "stock" : {
                "orange":orangeDest,
                "banane":bananeDest,
                "pomme":pommeDest,
                "fraise":fraiseDest,
                "cerise":ceriseDest
            }
          }};
          const options2 = { upsert: true };
          coll2.updateOne(query2, update2, options2);
  
        });
      }
    });

  });

    

  res.json({message:"good to go"});
  }catch (err) {
  throw new Error('Unable to Connect to Database')
  };



      
});


router.post('/add', async(req,res)=>{
  try {
    await client.connect(err => {
      // perform actions on the collection object
      const collection = client.db("myDatabase").collection("fruits");


      collection.findOne({shopLocation:req.body.shopLocation},function(err, docs){
        var orangeDest = Number(docs.stock.orange) + Number(req.body.stock.orange);
        var bananeDest = Number(docs.stock.banane) + Number(req.body.stock.banane);
        var pommeDest = Number(docs.stock.pomme) + Number(req.body.stock.pomme);
        var fraiseDest = Number(docs.stock.fraise) + Number(req.body.stock.fraise);
        var ceriseDest = Number(docs.stock.cerise) + Number(req.body.stock.cerise);

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

      });

    });
  res.json({message:"added or removed stocks successfully"});
  }catch(err){
    res.json({message:err});
  }

});



module.exports = router;