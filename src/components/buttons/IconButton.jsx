import styles from './IconButton.module.css';
const CLASSNAME = {
	black: {
		normal: styles.black,
		filled: styles.blackFilled
	},
	red: { normal: styles.red, filled: styles.redFilled }
};
const IconButton = ({
	kind = 'black',
	filled = false,
	icon: Icon,
	className,
	...props
}) => {
	const classNames = CLASSNAME[kind];
	const classNameKey = filled ? 'filled' : 'normal';
	const kindClassName = classNames[classNameKey];
	return (
		<button
			{...props}
			className={`${styles.button} ${kindClassName} ${className}`}
		>
			<Icon />
		</button>
	);
};

export default IconButton;
