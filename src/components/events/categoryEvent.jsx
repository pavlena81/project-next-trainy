import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

const CategoryEvent = ({ data, pageName }) => {
    return (
       <div className={styles.category_events}>
            <h1>Events in {pageName}</h1>
            {data ?
                <div className={styles.content}>
                  
                {data.map((ev) => (
                  <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref legacyBehavior>  
                    <a className={styles.cat_event_card}>
               
                    <Image  src={ev.image} alt={ev.title} width={300} height={300} />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p></a></Link>  
                ))}
                </div>
            : ' '}
           
        </div>
    )
}

export default CategoryEvent;