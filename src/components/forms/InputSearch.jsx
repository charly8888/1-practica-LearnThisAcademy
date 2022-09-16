import SearchIcon from '../icons/SearchIcon';
import styles from './InputSearch.module.css';

const InputSearch = ({ className, ...props }) => {
	return (
		<div className={`${styles.wrapper} ${className || ''}`}>
			<SearchIcon className={styles.icon} />
			<input {...props} type='text' className={styles.input} />
		</div>
	);
};

export default InputSearch;
