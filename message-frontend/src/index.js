/**
 * es6 来创建组件 导出导入模块
 * 1.import MessageBox组件
 * 2. 把此组件渲染到appdiv的内部
 **/
require('bootstrap/dist/css/bootstrap.css')
import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './components/MessageBox';
ReactDOM.render(<MessageBox url={"http://localhost:8000/messages"} />,document.getElementById('app'));