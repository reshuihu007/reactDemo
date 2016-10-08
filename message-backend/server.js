var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
mongoose.Promise = Promise;
 //服务实例 》 数据库》 集合》 文档
mongoose.connect("mongodb://localhost/message")

var MessageSchema = new mongoose.Schema({
    name: String,
    content: String,
    createAt: Date
});
//定义 可以操作数据库的model
var Message = mongoose.model('Message',MessageSchema);
var app = express();

//解析json格式的请求体 把请求体对象放在req.body上
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');//允许访问的来源
    res.setHeader('Access-Control-Allow-Headers','Content-Type');//允许发哪些请求头
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
    // preflight是询问服务器是否可以继续请求
    if(req.method == 'OPTIONS'){
        res.send('');
    }else{
        next();
    }
});
//增加消息
app.post('/messages', function (req,res) {
    var message = req.body;
    message.createAt  = new Date();
    //成功之后返回保存之后的文档对象
    Message.create(message).then(function(doc){
        res.send(doc);
    },function(error){
        res.send(error);
    });
});
//获取全部消息
app.get('/messages', function (req,res) {
    Message.find({}).then(function(messages){
        res.send(messages);
    },function(error){
        res.send(error);
    });
});
//删除消息
app.delete('/messages/:_id', function (req,res) {
    //如果删除一个文档，如果成功的话返回一个空对象
    Message.remove({_id:req.params._id}).then(function(messages){
        res.send({});
    },function(error){
        res.send(error);
    });
});

app.listen(8000);