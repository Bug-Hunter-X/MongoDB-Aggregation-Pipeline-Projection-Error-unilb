```javascript
//Corrected aggregation pipeline
db.collection('data').aggregate([
  {
    $match: {status: 'active'}
  },
  {
    $group: {
      _id: '$category',
      total: {$sum: '$value'}
    }
  },
  {
    $project: {
      _id: 0,
      category: '$_id',
      total: 1 //Correct projection
    }
  }
]);
```