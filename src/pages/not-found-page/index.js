import styles from './not-found-page.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <main className={ styles.main }>
            <p className={ styles.notFound }>404</p>
            <p className={ styles.text }>
                Страницы не существует
            </p>
            <Link to={'/'} className={ styles.back }>
                вернуться на главную
            </Link>
            <img />
        </main>
    )
};

export default NotFoundPage;