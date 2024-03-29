import PageSelector from './forms/PageSelector';
import Select from './forms/Select';
import styles from './UsersListPagination.module.css';
const UsersListPagination = ({
	page,
	itemsPerPage,
	setPage,
	setItemsPerPage,
	totalPages
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.itemsPerPage}>
				<Select
					value={itemsPerPage}
					onChange={ev => setItemsPerPage(Number(ev.target.value))}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
				</Select>
				<p>Elementos por página</p>
			</div>
			<PageSelector page={page} totalPages={totalPages} setPage={setPage} />
		</div>
	);
};

export default UsersListPagination;
