import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import classes from './Blog.css';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

export default class Blog extends Component {
	state = {
		posts: null
	}
	componentDidMount(){
		// Aqui obtendremos nuestros posts
	}
	onPostClickHandler = (postId) => {
		// Aqui cambiaremos de post
	}
	render(){
		let content = (<div>Cargando...</div>);
		if(this.state.posts!=null){
			content = this.state.posts.map(item => {
				return (<Post
					key={item.id}
					postId={item.id}
					title={item.title}
					userId={item.userId}
					clicked={this.onPostClickHandler} />);
			});
		}
		return(<div className={classes.Blog}>
			{content}
			<br />
			<hr />
			<Route path="/posts/:id" component={FullPost} />
		</div>);
	}
}