import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';


export const AllEvents = ({data}) => {
    return (
        <div className={styles.content}>           
            
        {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
            <a className={styles.card_event}>
          <Image  src={ev.image} alt={ev.title} width={300} height={300} />
            <h2 className={styles.card_event_title}>{ev.title}</h2>
                
            </a></Link>
        ))}
            
            
        </div>

    )
}

 