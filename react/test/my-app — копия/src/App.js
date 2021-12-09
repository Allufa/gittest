
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';

function App(props) {
	// let posts = [
	// 	{ id: 1, message: 'Hi? How are you?', likesCount: 10 },
	// 	{ id: 2, message: 'It\'s my first post', likesCount: 15 },
	// 	{ id: 3, message: 'BLABLABLA', likesCount: 15 },
	// 	{ id: 3, message: 'LALALA', likesCount: 15 }
	// ]
	// let dialogs = [
	// 	{ id: 1, name: 'Dimych' },
	// 	{ id: 2, name: 'Fimych' },
	// 	{ id: 3, name: 'Gimych' },
	// 	{ id: 4, name: 'Bimych' },
	// 	{ id: 5, name: 'Nimych' },
	// 	{ id: 6, name: 'Limych' }
	// ]
	// let messagesData = [
	// 	{ id: 1, message: 'Hi!', },
	// 	{ id: 2, message: 'How are you?', },
	// 	{ id: 3, message: 'Yo', },
	// ]
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					{/* <Route path="/Dialogs" component={Dialogs} />
					<Route path="/Profile" component={Profile} />
					<Route path="/Settings" component={Settings} />
					<Route path="/Music" component={Music} />
					<Route path="/News" component={News} /> */}
					{/* <Route path="/Dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messagesData={props.state.dialogsPage.messagesData} />} />
					<Route path="/Profile" render={() => <Profile posts={props.state.profilepage.posts} />} /> */}
					<Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
					<Route path="/Profile" render={() => <Profile state={props.state.profilepage} />} />
					<Route path="/Settings" render={() => <Settings />} />
					<Route path="/Music" render={() => <Music />} />
					<Route path="/News" render={() => <News />} />
				</div>

			</div>
		</BrowserRouter>
	);
}

export default App;
