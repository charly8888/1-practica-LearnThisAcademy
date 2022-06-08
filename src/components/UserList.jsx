import style from './UserList.module.css';
import UserRow from './UserRow';

const UserList = ({ children, users }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay usuarios</p>
		);

	return (
		<div className={style.list}>
			{children}
			{usersRendered}
		</div>
	);
};
export default UserList;
