/**
 * 此文件是本地node服务便于测试使用 如使用serve库可以忽略
 */

var http = require('http');//引入http模块
var fs   = require('fs');//引入文件读取模块
var root = "/Users/ucmed/Documents/WorkSpace/新移动远程/ZSYY-YC/dist/web"


//开启服务，监听8888端口
//端口号最好为6000以上
var server = http.createServer(function(req,res){
	var url = req.url;
	var file = root + url;
	console.log("访问的文件", file);
	fs.readFile(file, function(err, data) {
		if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在q</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();
        }
	});

    /*
        req用来接受客户端数据
        res用来向客户端发送服务器数据
    */

    console.log('有客户端连接');//创建连接成功显示在后台

    //一参是http请求状态，200连接成功
    //连接成功后向客户端写入头信息
    // res.writeHeader(200,{
    //     'content-type' : 'text/html;charset="utf-8"'
    // });

    // res.write('这是正文部分');//显示给客户端
    // res.end();

}).listen(8888);


console.log('服务器开启成功');