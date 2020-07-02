# jsdoc + Ext例子文档
> 这里是搭建了一个jsdoc文档，然后改写了模板添加了输入框+Ext例子这么一个功能，其他的框架的也可自行改编；

ps： 截图就不截了，目录都跟本项目一样；

## jsdoc的搭建
1. npm install -g jsdoc 安装jsdoc
2. 创建conf.json配置文件，
```json
{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["./src"],
    "includePattern": ".+\\.js$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "opts": {
    "recurse": true,
    "template": "template/tui.jsdoc-template", // 模板
    "encoding": "utf8",
    "destination": "./docs/" // 打包到哪里
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "outputSourceFiles": true,
      "staticFiles": {
        // 这个要配置一下，因为我们添加了ext、codemirror，不配置的话，会添加的那些打包不进去
        "include": ["./template/tui.jsdoc-template/static"] 
      }
    }
  }
}
```
3. 模板的添加
> 在conf.json里面配置了模板，模板可以去这里找https://github.com/jsdoc/jsdoc，在Templates那里，可以感受一些所有的模板；

4. 添加源码和注释，conf.json里面配置的source.include，template里面一般也会給demo，可以直接放进去；
5. 这时候在命令行输入jsdoc -c conf.json已经是可以打包了；
6. 更改了模板或者src不会被自动打包，必须手动点，这里添加了监听和打包功能；
> 先添加gulp依赖，npm i -D gulp gulp-jsdoc3 run-sequence，然后添加gulpfile.js文件，如下：

```javascript
let gulp = require('gulp');
let jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function (cb) {
    var config = require('./conf.json');
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb)); // 用gulp打包
});

gulp.task('default', function (cb) {
    let runSequence = require('run-sequence');
    runSequence('doc', cb);

    gulp.watch(['./template/**/*.*', './src/**/*.js'], ["doc"]); // 监听template里面的所有文件和src里面的js，如果有改动做doc动作；就是上面设置的那个
});

```
7. package.json里面添加docs和watch操作，然后直接npm run watch即可

到此，jsdoc搭建完毕

## ext例子添加
> 上面已经可以生成模板了，接下来就是改模板，添加ext的例子，并且可以在代码下面显示ext例子的结果，这里是改了examples.tmpl和layout.tmpl，具体看着两个文件就好了；

参考链接：
https://www.baidu.com/link?url=tfWGLboDHxfmwEDjMQ9cAa6UupVq8leyts8_G2uZGX29VOgNOV2iswYUoA7WdTCz&wd=&eqid=ad15298e00175f53000000065f01d965

https://github.com/jsdoc/jsdoc
