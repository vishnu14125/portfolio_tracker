// const express = require('express');
// const ObjectID = require('mongodb').ObjectID;

// const createRouter = function (collection){
//     const router = express.Router();

//     //INDEX - GET ALL

//     router.get('/', (req, res) => {
//         collection.find().toArray()
//         .then((docs) => res.json(docs))
//         .catch((err) => {
//         console.error(err)
//         res.status(500)
//         res.json({status: 500, error: err})
//     })
            
//      })

//      //SHOW - GET ONE BY ID

//      router.get('/:id', (req, res) => {
//          const id = req.params.id
//          collect.findOne({_id: ObjectID(id)})
//          .then(doc => res.json(doc))
//          .catch((err) => {
//             console.error(err)
//             res.status(500)
//             res.json({status: 500, error: err})
//           })
//      })

//      //CREATE - ADD NEW OBJECT

//      router.post('/', (req, res) => {
//          const newData = req.body
//          collection.insertOne(newData)
//          .then (result => res.json(result.ops[0]))
//          .catch((err) => {
//             console.error(err)
//             res.status(500)
//             res.json({status: 500, error: err})
//           })
//      })

//      //DESTROY - DELETE OBJECT

//      router.delete('/:id', (req, res) => {
//          const id = req.params.id
//          collection.deleteOne({_id: ObjectID(id)})
//          .then(result => res.json(result))
//          .catch((err) => {
//             console.error(err)
//             res.status(500)
//             res.json({status: 500, error: err})
//           })
//      })

//      //UPDATE - PUT REQUEST

//      router.put('/:id', (req, res) => {
//          const id = req.params.id
//          const updatedData = req.body
//          collection.updateOne({_id: ObjectID(id)}, {$set: updatedData})
//          .then (result => res.json(result))
//          .catch((err) => {
//             console.error(err)
//             res.status(500)
//             res.json({status: 500, error: err})
//           })
//      })

//     return router

// };

// module.exports = createRouter

const express = require('express');

const createRouter = (Model) => {
  const router = express.Router();

  // GET all
  router.get('/', async (req, res) => {
    try {
      const docs = await Model.find();
      res.json(docs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  // GET by ID
  router.get('/:id', async (req, res) => {
    try {
      const doc = await Model.findById(req.params.id);
      if (!doc) return res.status(404).json({ error: 'Not found' });
      res.json(doc);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  // POST - create
  router.post('/', async (req, res) => {
    try {
      const newDoc = new Model(req.body);
      const savedDoc = await newDoc.save();
      res.json(savedDoc);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  // PUT - update by id
  router.put('/:id', async (req, res) => {
    try {
      const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedDoc) return res.status(404).json({ error: 'Not found' });
      res.json(updatedDoc);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE by id
  router.delete('/:id', async (req, res) => {
    try {
      const deletedDoc = await Model.findByIdAndDelete(req.params.id);
      if (!deletedDoc) return res.status(404).json({ error: 'Not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};

module.exports = createRouter;
