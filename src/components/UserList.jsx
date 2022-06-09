import { useState } from 'react';
import { UsersContext } from '../lib/context/UsersContext';
import style from './UserList.module.css';
import UserListFilter from './UserListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { toggleUserActive, users } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<UserListFilter
				search={search}
				sortBy={sortBy}
				onlyActive={onlyActive}
				{...setFiltersFunctions}
			/>
			<UsersContext.Provider value={{ toggleUserActive }}>
				<UsersListRows users={usersFiltered} />
			</UsersContext.Provider>
		</div>
	);
};
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});
	const setSearch = search => setFilters({ ...filters, search });
	const setOnlyActive = onlyActive => setFilters({ ...filters, onlyActive });
	const setSortBy = sortBy => setFilters({ ...filters, sortBy });

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};
const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUserActive = userId => {
		const newUsers = [...users];
		const userIndex = newUsers.findIndex(user => user.id === userId);
		if (userIndex === -1) return;
		newUsers[userIndex].active = !newUsers[userIndex].active;

		setUsers(newUsers);
	};
	return { users, toggleUserActive };
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

export default UserList;
