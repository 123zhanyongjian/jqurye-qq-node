1.下载后 进行 npm install 或者cnpm i 进行依赖安装，
2.在数据库里导入sql文件。（建议数据库名称为chat,如果是其他的名称，请将文件夹中db.js文件中 database的值换成你的数据库名称）
3.在cmd中运行nodemon启动服务，服务器地址localhost:3333;
4.在public文件夹下的js文件夹 index.js里的host换成自己的ip地址或者localhost
5.如果scoket出现跨域问题有两种解决办法，1.将你访问地址和你设置的host相同，第二种，修改node_modules文件里的东西，具体地址如下
\node_modules\socket.io\lib\index.js在第93行后添加 headers['Access-Control-Allow-Origin'] = "*";后保存。两种方法均可解决跨域问题。



提示：所以操作依赖node 请先安装node.js