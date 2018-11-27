
const fs = require('fs');
const postcss = require("postcss");
const path = require("path");
const atImport = require("postcss-import")
const in_dir = "src/";
const out_dir = "src/components/css/";
const cssList = {};
// css to be processed

function readcss(dir) {
    var files = fs.readdirSync(dir);
    files.forEach(function(filename) {
        var srcfname = path.normalize(dir + path.sep + filename);
        var stat = fs.lstatSync(srcfname);
        var extname = path.extname(srcfname);
        if (stat.isDirectory() == true && filename != 'css') {
            readcss(srcfname);
        } else if (stat.isFile() && extname == '.css') {
            var css = fs.readFileSync(srcfname, "utf8");
            cssList[srcfname] = css;
        }
    });
};

function outputCss(filename, css) {
    var srcfname = path.normalize(out_dir + path.sep + filename);
    fs.writeFile(srcfname, css, function(err) {
        if (err) {
            throw err;
        } else {
            console.log('成功生成css文件==>' + srcfname);
        }
    });
}

function emptyDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log('css目录已创建成功\n');
    }
    fs.readdirSync(dir).forEach(function(filename) {
        var srcfname = path.normalize(dir + path.sep + filename);
        var stat = fs.lstatSync(srcfname);
        if (stat.isDirectory() == true) {
            emptyDir(srcfname);
        } else {
            fs.unlinkSync(srcfname);
            console.log("成功删除文件==>" + srcfname);
        }
    })
}



const cssImport=()=>{

  
    emptyDir(out_dir);
    readcss(in_dir);
    for (let k in cssList) {
        if (cssList.hasOwnProperty(k)) {
            postcss()
                .use(atImport())
                .process(cssList[k], {
                    from: k
                })
                .then(function(result) {
                    var output = result.css
                    var filename = path.basename(k);
                    outputCss(filename, output);
                });
        }
    }
}

module.exports = cssImport;







