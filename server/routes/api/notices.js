var express = require('express');
var router = express.Router();

var Notice = require('../../models/notice');


router.get('/', function(req, res){
  Notice.find({}, function(err, dbNotices){
    res.json({ notices: dbNotices})
  });
});

router.post('/', function(req,res){
  console.log(req.body);
  var noticesData = req.body;
  var newNotice = new Notice(noticesData);
  newNotice.save(function(err, databaseNotice){
    res.json( databaseNotice );
})
})



router.delete('/:id', function(req, res) {
  Notice.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
