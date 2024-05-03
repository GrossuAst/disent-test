import styles from './error.module.css';

const Error = ({ retry }) => {
    return (
        <main className={ styles.main }>
            <div className={ styles.container }>
                <p className={ styles.text }>
                    При загрузке произошла ошибка
                </p>
                <p onClick={ retry } className={ `${styles.text} ${styles.retry}` }>
                    Попробовать еще раз
                </p>
            </div>
        </main>

    )
};

export default Error;