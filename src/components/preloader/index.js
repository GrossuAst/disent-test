import styles from './preloader.module.css';
import Spinner from 'react-bootstrap/Spinner';

const Preloader = () => {
    return (
        <main className={ styles.main }>
            <Spinner animation="border" role="status" variant='primary'>
            </Spinner>    
        </main>
    )
};

export default Preloader;