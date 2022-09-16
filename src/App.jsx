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
	},
	{
		username: 'germanchah',
		name: 'Geasdnus',
		role: 'other',
		active: true
	},
	{
		username: 'joasde',
		name: 'Lalo Hornus',
		role: 'student',
		active: false
	},
	{
		username: 'edase',
		name: 'Ezequiel Hornus',
		role: 'teacher',
		active: false
	}
];

const App = () => <UserList initialUsers={USERS} />;
export default App;
