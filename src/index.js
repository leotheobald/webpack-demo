import _ from 'lodash';
import './assets/css/style.css';
import Icon from './assets/images/icon.png';

function component() {
  let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());

