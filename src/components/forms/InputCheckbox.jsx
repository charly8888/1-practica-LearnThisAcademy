import CheckIcon from '../icons/CheckIcon';
import styles from './InputCheckbox.module.css';

const InputCheckbox = ({ className, ...props }) => {
	return (
		<label className={`${styles.label} ${className || ''}`}>
			<input {...props} type='checkbox' className={styles.input} />
			<CheckIcon className={styles.check} />
		</label>
	);
};

export default InputCheckbox;
