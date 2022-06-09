import UserList from './components/UserList';

const USERS = [
	{
		name: 'German Hornus',
		role: 'teacher',
		active: true
	},
	{
		name: 'Lalo Hornus',
		role: 'student',
		active: true
	},
	{
		name: 'Ezequiel Hornus',
		role: 'teacher',
		active: false
	}
];

const App = () => <UserList users={USERS} />;
export default App;
