import Image from 'next/image';
import React, { useRef } from 'react'; 
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    console.log(inputEmail);

    const router = useRouter();
    console.log(router);
    const onSubmit = (e) => {
        e.preventDefault();

        const emailValue = inputEmail.current.value;
        
     };

     return (
         <div className="event_single_page"> 
            <h1>{data.title}</h1> 
            <Image src={data.image} width={900} height={500} alt={data.title} />
            <p>{data.description}</p>
             <form className={styles.email_registration}
             onSubmit={onSubmit}>
                <label className={styles.label}>Get registered for this event!</label>
               <input className={styles.input}
                ref={inputEmail}
                type="email"
                id="email"
                placeholder="Please insert your email here"/>
                <button
                    type="button"
                className={styles.btn_registr}>Submit</button>
            </form>
        </div>
    )
}

export default SingleEvent;