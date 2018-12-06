var fs = require("fs");
var archiver = require('archiver');


function zip_release() {
  
    console.log('压缩js文件');
    var output = fs.createWriteStream('./release/YC' + '.zip');
    var archive = archiver('zip');
    archive.on('error', function (err) {
        throw err;
    });
    output.on('end', function () {
        console.log('Data has been drained');
    });
    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        console.log('zip打包完成');
    });
    archive.pipe(output);
    archive.directory('release/YC/', false);
    archive.finalize()
}
zip_release();
