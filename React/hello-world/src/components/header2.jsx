import styles from './header2.module.css';

const Header2 = (props) =>{
    return (
        <div>
        <h1 className={styles.header2}>{props.text}</h1>
        <h2 className={styles.header2}>{props.name}</h2>
        <h3 className={styles.header2}>{props.age}</h3>
        <h4 className={styles.header2}>{props.hobbies}</h4>
        </div>
    );
}

export default Header2;