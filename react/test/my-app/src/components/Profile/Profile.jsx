import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
	// let posts = [
	// 	{ id: 1, message: 'Hi? How are you?', likesCount: 10 },
	// 	{ id: 2, message: 'It\'s my first post', likesCount: 15 },
	// 	{ id: 3, message: 'BLABLABLA', likesCount: 15 },
	// 	{ id: 3, message: 'LALALA', likesCount: 15 }
	// ]


	return (

		<div className={classes.content}>
			<ProfileInfo />

			<MyPosts posts={props.state.posts} />

		</div>
	)
}
export default Profile;
