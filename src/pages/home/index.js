import styles from './home.module.css';
import { Link } from 'react-router-dom';
import LinkImage from '../../images/link-image.svg';
import Main from "../../components/main";
import Card from '../../components/card';

const Home = ({ countriesList }) => {
    return (
        <Main>
            <ul className={ `${styles.list} d-flex flex-column` }>
                {
                    countriesList.map((item, index) => (
                        <li key={ index } className={ styles.listItem }>
                            <Card item={ item } />
                        </li>
                    ))
                }
            </ul>
        </Main>
    )
};

export default Home;