import Item from '../../components/item';
import styles from './items.module.scss';

function Items(props) {
    
    const items= props.data.map((item) => <Item key={item.id} data={item}/>);

    return (   
            <div classNames={styles.items}>
                {items}
            </div>
    )
}

export default Items;