import { useFilters } from '../lib/hooks/useFilters';
import {
	filterActiveUsers,
	filterUsersByName,
	paginateUsers,
	sortUsers
} from '../lib/users/filterUsers';
import style from './UserList.module.css';
import UserListFilter from './UserListFilters';
import UsersListPagination from './UsersListPagination';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const {
		filters,
		// search,
		// onlyActive,
		// sortBy,
		// page,
		// itemsPerPage,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { users, totalPages } = getUsers(initialUsers, filters);

	// useEffect(() => setPage(1), [search, onlyActive]);

	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserListFilter
				search={filters.search}
				sortBy={filters.sortBy}
				onlyActive={filters.onlyActive}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={users} />
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setItemsPerPage={setItemsPerPage}
				setPage={setPage}
				totalPages={totalPages}
			/>
		</div>
	);
};

const getUsers = (
	initialUsers,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	let usersFiltered = filterActiveUsers(initialUsers, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const totalPages = Math.ceil(usersFiltered.length / itemsPerPage);

	usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage);

	return { users: usersFiltered, totalPages };
};

export default UserList;
