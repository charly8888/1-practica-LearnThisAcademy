import UserList from './components/UserList';

const USERS = [
	{
		id:0,
		name: 'German Hornus',
		role: 'teacher',
		active: true
	},
	{
		id:1,
		name: 'Lalo Hornus',
		role: 'student',
		active: true
	},
	{
		id:2,
		name: 'Ezequiel Hornus',
		role: 'teacher',
		active: false
	}
];

const App = () => <UserList initialUsers={USERS} />;
export default App;
