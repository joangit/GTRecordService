/**
 * Created by tommy_2 on 2014/8/20.
 */
var express = require('express');
var notify = require('../utils/httpnotify');
var mts = require('../models/mts');
var router = express.Router();

mts.create('192.168.16.141',18001);

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/status',function(req,res){
   console.log(mts.getIp());
   console.log(mts.getPort());
   notify.get();
   console.log('获取当前MTS录播状态');
   res.send('200');
});

router.post('/record',function(req,res){
    console.log('根据请求开始记录');
});

router.delete('/record',function(req,res){
    console.log('根据请求停止记录');

});

module.exports = router;