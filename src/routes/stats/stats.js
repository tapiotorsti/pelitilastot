import styles from './stats.module.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

function Stats(props) {


    // Hakee päivämäärän ja KDR tiedot item-kansiosta
    const linedata= props.data.map(item => ({date: new Date(item.date).getTime(), kdr: item.killDeathRatio}));

      // Palautaa pylväsdiagrammin jossa näkyy ylhäällä haetut tiedot
    return (
        <div className={styles.stats}>
            <h2>Stats</h2>
            <h3>KDR</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={linedata}>
                <XAxis  dataKey="date" 
                        tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-fi")}
                        domain={["dataMin","dataMax"]} 
                        
                />
                <YAxis />
                <Tooltip cursor={false} labelFormatter={value => new Date(value).toLocaleDateString("fi-fi")} />
                <Bar name="Kill/DeathRatio" dataKey="kdr" fill="purple" />
              </BarChart>
            </ResponsiveContainer>


                
        </div>
    );
}

export default Stats;