import InputCheckbox from './forms/InputCheckbox';
import InputSearch from './forms/InputSearch';
import Select from './forms/Select';
import style from './UserListFilters.module.css';
const UserListFilter = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	return (
		<div className={style.form}>
			<div className={style.row}>
				<InputSearch
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder='Buscar...'
				/>
				<Select
					value={sortBy}
					onChange={e => setSortBy(Number(e.target.value))}
				>
					<option value={0}>Por defecto</option>
					<option value={1}>Por nombre</option>
					<option value={2}>Por rol</option>
					{!onlyActive && <option value={3}>Por activos</option>}
				</Select>
			</div>
			<div className={style.row}>
				<div className={style.active}>
					<InputCheckbox
						checked={onlyActive}
						onChange={ev => setOnlyActive(!onlyActive)}
						className={style.checkbox}
					/>
					<p>Mostrar solo activos</p>
				</div>
			</div>
		</div>
	);
};
export default UserListFilter;
