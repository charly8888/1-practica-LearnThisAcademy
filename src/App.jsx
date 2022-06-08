import UserList from './components/UserList';

const USERS = [
	{
		name: 'German Hornus',
		role: 'teacher',
		active: true
	},
	{
		name: 'Ezequiel Hornus',
		role: 'teacher',
		active: false
	},
	{
		name: 'Lalo Hornus',
		role: 'student',
		active: true
	}
];

const App = () => (
	<UserList users={USERS}>
		<h1>Listado de usuarios</h1>
	</UserList>
);
export default App;
