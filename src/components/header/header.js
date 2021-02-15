import styles from './header.module.scss';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddButton from '../../shared/uibuttons';

function Header() {
    return(
        <div className={styles.header}>
            <SportsEsportsIcon/>
            GameLog
            <div className={styles.header_Add}>
            <AddButton primary type="submit">ADD+</AddButton>
            </div>
        </div>
    );
}


export default Header;