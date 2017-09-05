# webpack

简述:
伴随着移动互联的大潮,当今越来越多的网站已经从网页模式进化到Webpack模式 它们运行在现代的高级浏览器中,使用技术是H5/CSS3/ES6等更新的技术来开发丰富的功能,网页已经不仅仅是完成浏览的基本需求 并且webapp通常是一个单页面应用 每个视图通过异步的方式加载 这导致了页面初始化和使用过程中
会越来越多的js代码。

通常我们将webpack安装在项目的依赖中 这样就可以使用项目本地版本的webpack
npm install webpack --save-dev

使用webpack开发工具 要单独安装

将创建的 entry.js  打包输出到  build.js 中
webpack entry.js build.js.     

创建一个模块 并在一个文件中去引用该模块 当打包该文件的时候 webpack会分析入口文件 解析包含依赖关系的各个文件。这些文件(模块)都会按照依赖关系打包到 指定的文件中 并且
webpack会给每个模块分配一个唯一的id 并通过该id索引来访问模块 在页面启动时 会先执行 入口文件中的代码 其它模块会在运行的时候 require的时候 在执行(按需加载)

Loader(重点)

webpack本身只能处理javascript模块,如果要处理其它类型的文件 就需要loader(类似编译器)进行转换。Loader可以理解为模块和资源的转换器 它本身也是一个函数 接受源文件作为参数 返回转换之后的结果 这样我们就可以通过 require来像按需加载javascript一样的加载任何类型的模块和文件 例如jsx,less,image等

loader的特性:
loader可以通过管道方式链式调用 每个loader可以把资源转换成任意格式并传递给下一个loader 但是最后一个loader必须返回javascript
loader可以异步或同步执行
loader运行在node环境中 
loader可以接受参数 以此来传递配置项给loader
loader可以通过文件扩展名(或正则表达式)绑定给不同类型的文件
loader可以通过npm发布和安装
插件可以让loader拥有更多特性

loader本身运行在node环境中的js 通常返回一个函数 大多数情况下我们通过npn来管理loader 也可以在项目中自己写loader模块

按照惯例 也不是必须 通常loader 一般以 xx-loader的方式命名 xxx代表了这个loader要做的转换功能 比如json-loader

在使用loader的时候可以使用全名json-loader或者是短名json 这个命名规则和搜索优先级顺序在webpack的resolveLoader.moduleTemplates api中定义

loader的使用可以在require引用模块的时候添加 也可以在webpack全局配置中进行绑定还可以通过命令行的方式使用

WebPack对css的应用
1.创建一个style1.css 和style2.css
2.执行npm install css-loader style-loader --save-dev(添加css转换的loader)
3.以模块的形式require  css文件 require("!style-loader!css-loader!./style1.css")
或者
我们也可以根据模块类型(扩展名)来自动绑定需要的loader
执行指令:webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader'

配置文件
webpack在执行的时候 除了使用命令行传递参数。还可以通过指定的配置文件来执行 默认情况下 会搜索当前目录下面的webpack.config.js文件 这个文件一个node.js模块 返回json格式的配置信息对象 或者通过--config选项来指定配置文件
创建一个webpack.config.js文件
执行指令 webpack 

plugins
webpack中插件的应用可以完成更多loader不能完成的功能
插件一般都是在webpack的配置信息plugins选项中指定
webpack本身也内置了一些常用的插件。当然还可以通过npm安装第三方插件

开发环境下 

如果不想每次编译之后 都进行打包输出 可以使用
webpack  --progress --color --watch

当然使用webpack-dev-server开发服务器更适合 它将默认监听端口8080 启用一个express静态资源web服务器    并且以监听的模式自动运行webpack 在浏览器中使用
http://localhost:8080 or http://127.0.0.1:8080 or http://ip:port
来浏览项目中的页面和编译后的资源输出 并且通过一个socket.io服务实时监听它们的变化并且自动刷新
首先安装
必须全局安装 才能在任意路径下使用webpack-dev-server
npm install webpack-dev-server -g
运行
webpack-dev-server --progress --colors





