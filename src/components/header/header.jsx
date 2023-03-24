import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
        <div>
            <Image alt="logo" src={'/images/logo.png'} width={50} height={50} />
        <nav>
                <img />
            <ul className={styles.nav_list}>
                    
            <li className={styles.nav_item}>
                <Link href='/' passHref legacyBehavior>
                    <a>Home</a></Link>         
            </li>
            
            <li>
                
               <Link href='/events' passHref legacyBehavior><a>Events</a></Link>         
            </li>
            
            <li>
              <Link href='/about-us' passHref legacyBehavior><a>About Us</a></Link>          
            </li>
          </ul>        
          
        </nav>
        </div>
        <p className={styles.title}>life hold special moment</p>    
      </header>
    )
}