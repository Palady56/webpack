import Post from "./post"
import logo from './images/favicon.png';
import './style.css';

const post = new Post('Webpack Post Title')

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

console.log('Post to string:', post.toString())