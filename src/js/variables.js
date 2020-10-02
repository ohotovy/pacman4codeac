const TILE_SIZE = 85;

const mazeW = prompt('Choose Width');
const mazeH = prompt('Choose Heigth');

const gender = Math.random()<0.5 ? 'boy' : 'girl';
const color = Math.random()<1/3 ? 'light' : (Math.random()<2/3 ? 'medium' : 'dark');