
const component = require('./components/foo');
const React = require('react');
const ReactDOM = require('react-dom');


class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
            <p>We're writing this tweet in JSX. Holy moly!</p>  
        </div>
      </div>
    );
  }
}


const fruits = require('./components/fruits');
console.log(fruits.apple);
const apple = require('./components/fruits').apple;
console.log(apple); 

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(Tweet),
  ]),
  document.getElementById('main')
);
