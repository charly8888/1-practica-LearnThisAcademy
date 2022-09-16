import { SORT_OPTIONS } from '../constants/sortOptions';
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
					<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
					<option value={SORT_OPTIONS.NAME}>Por nombre</option>
					<option value={SORT_OPTIONS.ROLE}>Por rol</option>
					{!onlyActive && (
						<option value={SORT_OPTIONS.ACTIVE}>Por activos</option>
					)}
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
