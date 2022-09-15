import style from "./UserListFilters.module.css"
const UserListFilter = ({search, setSearch, onlyActive,setOnlyActive, sortBy,setSortBy}) => {
	return (
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
			<select value={sortBy} onChange={e => setSortBy(Number(e.target.value))}>
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
				<option value={2}>Por defecto</option>
			</select>
		</form>
	);
};
export default UserListFilter