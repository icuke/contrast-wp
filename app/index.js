import './sass/main.scss';
import generateText from './sub';
import moment from 'moment';

let app  = document.createElement('div');
let p  = document.createElement('p');

const myPromise = Promise.resolve(3000);
myPromise.then((number) => {
  p.innerHTML = '<p>promise result is ' + number + ' now is ' + moment().format() + '</p>';
  document.body.appendChild(p)
});

app.innerHTML = '<h1>Hello World it</h1>';

document.body.appendChild(app);
app.appendChild(generateText());