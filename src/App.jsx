import UserList from './components/UserList';

const USERS = [
	{
		username: 'german',
		name: 'German Hornus',
		role: 'other',
		active: true
	},
	{
		username: 'jose',
		name: 'Lalo Hornus',
		role: 'student',
		active: true
	},
	{
		username: 'eze',
		name: 'Ezequiel Hornus',
		role: 'teacher',
		active: false
	}
];

const App = () => <UserList initialUsers={USERS} />;
export default App;
