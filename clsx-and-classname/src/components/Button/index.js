import clsx from 'clsx';

import styles from './Button.module.css';

function Button({ primary, second }) {

    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.second]: second
    })

    return (
        <button className={classes}>
            Click me!
        </button>
    )
}

export default Button