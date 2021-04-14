//全局样式
import './App.css';
//全局路由文件
export * from './router/config';

//临时变量
global.menus = [
	{
		title: 'Home',
		key: '/page/home'
	},
    {
		title: 'About',
		key: '/page/about'
	}
]