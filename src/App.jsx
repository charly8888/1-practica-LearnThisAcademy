import UserList from './components/UserList';
import { USER_ROLES } from './constants/userRoles';

const USERS = [
	{
		username: 'german',
		name: 'German Hornus',
		role: USER_ROLES.OTHER,
		active: true
	},
	{
		username: 'jose',
		name: 'Lalo Hornus',
		role: USER_ROLES.STUDENT,
		active: true
	},
	{
		username: 'eze',
		name: 'Ezequiel Hornus',
		role: USER_ROLES.TEACHER,
		active: false
	},
	{
		username: 'germanchah',
		name: 'Geasdnus',
		role: USER_ROLES.OTHER,
		active: true
	},
	{
		username: 'joasde',
		name: 'Lalo Hornus',
		role: USER_ROLES.STUDENT,
		active: false
	},
	{
		username: 'edase',
		name: 'Ezequiel Hornus',
		role: USER_ROLES.TEACHER,
		active: false
	}
];

const App = () => <UserList initialUsers={USERS} />;
export default App;
