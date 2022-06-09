import { useState } from 'react';
import style from './UserList.module.css';
import UserRow from './UserRow';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	const [sortBy, setSortBy] = useState(0);

	console.log(sortBy);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const usersRendered = renderUsers(usersFiltered);

	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<form className={style.form}>
				<input
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<div className={style.active}>
					<input
						type='checkbox'
						checked={onlyActive}
						onChange={ev => setOnlyActive(!onlyActive)}
					/>
					<span>Sólo activos</span>
				</div>
				<select
					value={sortBy}
					onChange={e => setSortBy(Number(e.target.value))}
				>
					<option value={0}>Por defecto</option>
					<option value={1}>Por nombre</option>
					<option value={2}>Por defecto</option>
				</select>
			</form>
			{usersRendered}
		</div>
	);
};
const filterUsersByName = (users, search) => {
	if (!search) return [...users];
	const lowerCaseSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};
const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};
const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case 2:
			return sortedUsers.sort();

		default:
			return sortedUsers;
	}
};
const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>;

	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UserList;
