import {Link} from 'react-router-dom';
import styles from './menu.module.scss';
import ViewListIcon from '@material-ui/icons/ViewList';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Menu() {
    return(
        <div className={styles.menu}>
            <div><Link to ="/"><ViewListIcon /></Link></div>
            <div><Link to ="/stats"><TimelineIcon /></Link></div>
            <div><Link to ="/profile"><AccountCircleIcon /></Link></div>
        </div>
    );
}

export default Menu;