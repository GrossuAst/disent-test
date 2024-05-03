import styles from './country-page.module.css';
import { useParams } from 'react-router-dom';
import Main from '../../components/main';
import { useEffect, useState } from 'react';
import { getInfo, fakeRequest } from '../../utils/api';
import Preloader from '../../components/preloader';
import { Link } from 'react-router-dom';

const CountryPage = () => {
    const { name } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        // fakeRequest()
        fetchInfo();
    }, []);

    function retry() {
        fakeRequest();
        // fetchInfo();
    };

    function fetchInfo() {
        setLoading(true);
        getInfo(name)
        .then((res) => {
            setInfo(res[0]);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    };

    return (
        <Main>
            {
                isLoading ? <Preloader /> 
                : info ?
                <>
                    <article className={ styles.card }>
                        <h1 className={ styles.title }>{ info.name.official }</h1>
                        <img src={ info.flags.png } className={ styles.image } />
                        <div className={ styles.infoContainer }>
                            <p>Столица: { info.capital }</p>
                            <p>Население: { info.population} чел.</p>
                        </div>
                        <Link to='/' className={ styles.link }>Вернуться на главную</Link>
                    </article>
                    
                </>
                :             
                <div className={ styles.container }>
                    <p className={ styles.text }>
                        При загрузке произошла ошибка
                    </p>
                    <p className={ `${styles.text} ${styles.retry}` } onClick={ retry }>
                        Попробовать еще раз
                    </p>
                    <Link to='/' className={ styles.link }>Вернуться на главную</Link>
                </div>
            }
        </Main>
    )
};

export default CountryPage;