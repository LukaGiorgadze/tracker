import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import news from './Reducers/News';

let allReducers = combineReducers({
	news,
	routing: routerReducer
});


// Example states
let defaultState = {
	news: 
	[
		{
			id: 157,
			title: 'დაიწყო კორპუსის ეზოს კეთილმოწყობა',
			author: 'ნატალი გიორგაძე',
			date: '05 დეკემბერი, 2016',
			content: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს.' +
					'\r\n' +
					'<Embed id="S0gfg1Nm9GU" placeholder="https://img.youtube.com/vi/S0gfg1Nm9GU/maxresdefault.jpg" source="youtube" />' +
					'\r\n' +
					'სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა,' +
					'ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.' +
					'ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.',
			likesN: 15,
			commentsN: 8,
		},
		{
			id: 158,
			title: 'მეორე ახალი სიახლე',
			author: 'ნატალი გიორგაძე',
			date: '05 დეკემბერი, 2016',
			content: 'ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.' +
					'\r\n' +
					'ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.' +
					'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს.' +
					'სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა.',
			likesN: 15,
			commentsN: 8,
		}
	]
};


let store = createStore(
	allReducers,
	defaultState,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);


export let history = syncHistoryWithStore(browserHistory, store);

export default store;