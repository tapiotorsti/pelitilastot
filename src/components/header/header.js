import {Link} from 'react-router-dom';
import styles from './header.module.scss';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddButton from '../../shared/uibuttons';

function Header() {

    // Sovelluksen nimessä sekä kuvakkeessa linkki jolla pääsee etusivulle
    return(
        <div className={styles.header}>
            <div className={styles.header_log}>
           <Link to= "/"><SportsEsportsIcon/>
            GameScore</Link> 
            </div>
            <div className={styles.header_Add}>
            <Link to="/add"><AddButton primary>ADD+</AddButton></Link>
            </div>
        </div>
    );
}


export default Header;