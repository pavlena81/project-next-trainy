import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

export const HomePage = ({data}) => {
    return (
       <main className={styles.main}>
        <div className={styles.description}>
                  
        </div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
          <a>
                    <Image className={styles.image} alt={ev.title} src={ev.image} width={200} height={250} />
          <h2 className={styles.h2}>{ev.title}</h2>
            <p className={styles.text_descript }>{ev.description}</p>
          </a></Link>
        ))}         
      </main> 
    )
}