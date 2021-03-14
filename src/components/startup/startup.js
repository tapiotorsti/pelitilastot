import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import {useAuth} from 'reactfire';
import gslogo from '../../assets/images/gslogo.png';

function Startup(props) {

    const auth = useAuth();

    const signInGoogle = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
 
    return (
        <div className={styles.startup}>
            <h1><img src={gslogo} alt={gslogo} /></h1>
            <div className={styles.startup_text}> Keep track of your gaming results!</div>
            <Button onClick={signInGoogle} primary>Login</Button>
        </div>
    );
}

export default Startup;