import { useState } from 'react';
import { useFilters } from '../lib/hooks/useFilters';
import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers
} from '../lib/users/filterUsers';
import style from './UserList.module.css';
import UserListFilter from './UserListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { users } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserListFilter
				search={search}
				sortBy={sortBy}
				onlyActive={onlyActive}
				{...setFiltersFunctions}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	);
};

const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	return { users };
};

export default UserList;
