
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogItem';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />);
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
				{/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
				<DialogItem name={dialogs[1].name} id={dialogs[1].id} />
				<DialogItem name={dialogs[2].name} id={dialogs[2].id} />
				<DialogItem name={dialogs[3].name} id={dialogs[3].id} />
				<DialogItem name={dialogs[4].name} id={dialogs[4].id} />
				<DialogItem name={dialogs[5].name} id={dialogs[5].id} /> */}

			</div><div className={classes.messages}>
				{messagesElements}
				{/* <Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} /> */}

			</div>
		</div>
	)
}
export default Dialogs;