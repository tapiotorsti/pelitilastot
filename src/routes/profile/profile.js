import styles from './profile.module.scss';
import Button from '../../shared/uibuttons';
import codcw from '../../assets/images/CODcw.png';
import hitman3 from '../../assets/images/hitman3.png'; 
import fifa21 from '../../assets/images/fifa21.png';
import acvalhalla from '../../assets/images/acvalhalla.png';
import nfl21 from '../../assets/images/nfl21.png';
import valheim from '../../assets/images/valheim.png';
import csgo from '../../assets/images/csgo.png';
import loophero from '../../assets/images/loophero.png';
import {useUser, useAuth} from 'reactfire';




  
  function Profile(props) {

    const user = useUser();
    const auth = useAuth();

    const signOut = async () => {
        await auth.signOut();
    }


      // Lista kuun myydyimmistä peleistä PlayStationilla, Xboxilla ja PC:llä(PC:llä lähteinä Steam sekä Epic Store)
      // Kuvat haetaan assets-kansiossa sijaitsevasta images-kansiosta
    return(
      <div><h2>Hottest games</h2>
      <div className={styles.profile}>
        <div className={styles.profile_ps}>
          <ol>
            <h3>PlayStation</h3>
            <li>Call of Duty: Black Ops Cold War <img src={codcw} alt={codcw} height={100} width={100}/> </li>
            <li>Hitman 3 <img src={hitman3} alt={hitman3} height={100} width={100}/></li>
            <li>FIFA 21<img src={fifa21} alt={fifa21} height={100} width={100}/></li>
          </ol>
        </div>
        <div className={styles.profile_xbox}>
        <ol>
            <h3>Xbox</h3>
            <li>Call of Duty: Black Ops Cold War<img src={codcw} alt={codcw} height={100} width={100}/></li>
            <li>Assassin's Creed Valhalla <img src={acvalhalla} alt={acvalhalla} height={100} width={100}/></li>
            <li>Madden NFL 21 <img src={nfl21} alt={nfl21} height={100} width={100}/></li>
          </ol>
        </div>
        <div className={styles.profile_pc}>
        <ol>
            <h3>PC</h3>
            <li>Valheim<img src={valheim} alt={valheim} height={100} width={100}/></li>
            <li>Counter-Strike:GO<img src={csgo} alt={csgo} height={100} width={100}/></li>
            <li>Loop Hero<img src={loophero} alt={loophero} height={100} width={100}/></li>
          </ol>
        </div>
      </div>
      <h3>Profile</h3>

            <div className={styles.settings_profile}>
                <div className={styles.settings_user}>
                    <div><img src={user.data.photoURL} alt=""/></div>
                    <div>{user.data.displayName}<br/>{user.data.email}</div>
                </div>
                <div>
                    <Button onClick={signOut} primary>Logout</Button>
                </div>
            </div>
      </div>
    )
  }

  

export default Profile;