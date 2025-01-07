import styles from './header.module.css';

function greet (){
    return "Hello World! fra privat funksjon";
}

export default function Header(){
    return(
        <h1 className={styles.header}>{greet()}</h1>
    )
}

export function Greeting(){
    return <h1>{greet()}</h1>
}

// export default Header;
