import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import {useHistory} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from '@material-ui/icons/Help';

function ItemForm(props) {

    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.amount = parseFloat(storedvalues.amount);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onItemSubmit(storedvalues);
        history.push("/");
    }

    const initialState = props.data ? props.data : {
        kills:"" ,
        deaths: "",
        winOrLoss:"",
        killDeathRatio: 0,
        game: "",
        date: new Date().toISOString().substring(0,10)
    };

    const{values, handleChange, handleSubmit} = useForm(submit, initialState, false);


    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleDelete = (event) => {
        event.preventDefault();
        props.onItemDelete(values.id);
        history.push("/");
    }

                // KDR kohtaan ei ole mahdollista kirjoittaa, koska se tieto lasketaan automaattisesti
                // Sovelluksessa oleva Tooltip kertoo sen käyttäjälle
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <div className={styles.form_row}>
                        <div>
                        <label htmlFor="kills">Kills</label>
                            <input type="number" name="kills" onChange={handleChange} value={values.kills} required/>
                        </div>
                        <div>
                            <label htmlFor="deaths">Deaths</label>
                            <input type="number" name="deaths" onChange={handleChange} value={values.deaths} required/>       
                        </div> 
                    </div>
                    <div className={styles.form_row}>
                        <div>
                           
                            <label htmlFor="kdr">K/D Ratio</label>
                            <input type="number" name="kdr" onChange={handleChange} value={values.killDeathRatio} readOnly= {true}/>
                        </div> 
                        <div>
                        <Tooltip
                                title="Kill/Death Ratio is automatically calculated"
                                placement="top"
                            >
                                <HelpIcon 
                                    variant="contained"
                                    fontSize="small"

                                ></HelpIcon>
                            </Tooltip>
                        </div>
            
                    </div>
                    <div className={styles.form_row}>
                    <div className={styles.form_winOrLoss}>
                            <label htmlFor="winOrLoss">Win or Loss</label>
                            <select name="winOrLoss" onChange={handleChange} value={values.winOrLoss}>
                                <option value=""></option>
                               <option value="Win">Win</option>
                               <option value="Loss">Loss</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.form_row}>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" onChange={handleChange} value={values.date}/>
                            </div>
                        <div>
                            <label htmlFor="game">Game</label>
                            <input type="text" name="game" onChange={handleChange} value={values.game}/>       
                        </div> 
                    </div>
                    <div className={styles.form_row}>
                        <div>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </div>
                        <div>
                            <Button primary type="submit">ADD</Button>
                        </div>         
                    </div>
                    
                    { props.onItemDelete ? 
                        <div className={styles.form_row}>
                            <div>
                                <Button onClick={handleDelete}>Delete</Button>
                            </div>
                            <div></div>
                        </div> : "" }
                </div>
            </form>
        </div>
    );
}

export default ItemForm;