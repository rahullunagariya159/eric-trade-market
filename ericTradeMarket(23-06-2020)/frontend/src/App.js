import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
// import Header from "./Header";
// import Footer from "./Footer";
// import Menu from "./Menu";
// import Content from "./Content";
// import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/dashboard/Dashboard';
import Social from './components/social/Social';
import Profilepage from './components/profile/profile';
import SearchPageResult from './components/social/SearchResult';
import AddAccount from './components/profile/AddAccount';

import Register from './components/Register';
import ViewConnection from './components/profile/ViewConnection';

// const Home = () => {
//   return <h1>i am home page</h1>;
// };

// const About = (props) => {
//   console.log(props);
//   setTimeout(() => {
//     props.history.push("/");
//   }, 3000);
//   return <h1>i am about page</h1>;
// };

export default class App extends Component {
	render() {
		return (
			<div>
				{/* <Header />
				<Menu />
				<Content />
				<Footer /> */}
				<BrowserRouter>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/socialpage" component={Social} />
					<Route path="/profile" component={Profilepage} />
					<Route path="/searchResult" component={SearchPageResult} />
					<Route path="/addAccount" component={AddAccount} />
					<Route path="/register" component={Register} />
					<Route path="/viewConnection" component={ViewConnection} />
				</BrowserRouter>
			</div>
		);
	}
}
