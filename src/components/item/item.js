import styles from'./item.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

function Item(props) {

    // Laskee muuttujan kdRatio eli pelissä tapahtuneiden tappojen ja kuolemien suhteen ja palauttaa sen kahden desimaalin tarkkuudella
    let kdRatio= (props.data.kills / props.data.deaths);

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_kills}>Kills: {props.data.kills}</div>
                <div className={styles.item_deaths}>Deaths: {props.data.deaths}</div>
                <div className={styles.item_killDeathRatio}>K/D Ratio: {props.data.killDeathRatio= parseFloat(kdRatio.toFixed(2)) }</div>
                <div className={styles.item_game}>Game: {props.data.game}</div>
                <div className={styles.item_date}>Date: {props.data.date}</div>
            </div>
            <div className={styles.item_winOrLoss}>{props.data.winOrLoss}</div>
          
            <div className={styles.item_edit}>
              <Link to ={"/edit/"+props.data.id}><EditIcon /></Link>
            </div>
        </div>
    );
}

export default Item;