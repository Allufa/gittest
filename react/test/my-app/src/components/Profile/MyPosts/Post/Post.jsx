import classes from './Post.module.css';



const Post = (props) => {




	return (
		<div className={classes.item}>
			<img src="https://sun2.ufanet.userapi.com/c9230/v9230390/f/_qc8ekBNZzA.jpg" alt="" />
			{props.message}
			<br />
			<span>likes </span>
			<span>{props.LikesCount}</span>
		</div>
	)
}
export default Post;