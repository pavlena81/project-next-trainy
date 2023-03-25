import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

export const HomePage = ({data}) => {
    return (
       <main className={styles.main}>
        <div className={styles.home_body}>
           {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
            <a className={styles.card}>
            <div className={styles.image}>
            <Image  alt={ev.title} src={ev.image} width={600} height={400} />
            </div>
            <div className={styles.content}>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            </div>
          </a></Link>
        ))}           
        </div>
             
      </main> 
    )
}