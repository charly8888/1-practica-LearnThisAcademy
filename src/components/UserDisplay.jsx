import styles from './UserDisplay.module.css';

const UserDisplay = ({ name, username }) => (
	<div className={styles.wrapper}>
		<span>{name}</span>
		<span className={styles.username}>@{username}</span>
	</div>
);

export default UserDisplay;
