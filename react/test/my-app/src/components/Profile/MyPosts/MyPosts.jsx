import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	// let posts = [
	// 	{ id: 1, message: 'Hi? How are you?', likesCount: 10 },
	// 	{ id: 2, message: 'It\'s my first post', likesCount: 15 }
	// 	{ id: 3, message: 'BLABLABLA', likesCount: 15 }
	// 	{ id: 3, message: 'LALALA', likesCount: 15 }
	// ]
	let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.likesCount} />)
	let newPostElement = React.createRef();
	let addPost = () => {
		alert(newPostElement.current.value);
	};

	return (
		<div className={classes.postsBlock}>
			<h3>My Posts</h3>
			<div><textarea name="" value="заполни меня" ref={newPostElement} cols="10" rows="1"></textarea></div>
			<div><button onClick={addPost}>add post</button></div>
			<div>
				new post
			</div>
			<div className={classes.posts}>
				{postsElements}
				{/* <Post message={postData[0].message} LikesCount={postData[0].likesCount} />
				<Post message={postData[1].message} LikesCount={postData[1].likesCount} /> */}
			</div>
		</div>

	)
}
export default MyPosts;