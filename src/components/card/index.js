import styles from './card.module.css';
import { Link } from 'react-router-dom';
import linkImage from '../../images/link-image.svg'

const Card = ({item}) => {
    return (
        <article className={ `${styles.card} d-flex` } >
        <img className={styles.image} src={ item.flags.png } />
            <div className={ `${styles.description} d-flex flex-column justify-content-center` }>
                <h4>
                    { item.name.common }
                </h4>
                <Link to={`/${item.name.common}`} className={`${styles.link} d-flex `}>
                    Узнать подробнее
                    <img className={ styles.linkImage } src={ linkImage } />
                </Link>
            </div>
        </article>
    )
};

export default Card;