import Image from 'next/image';
import React, { useRef, useState } from 'react'; 
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    console.log(inputEmail);

    const router = useRouter();
    const [message, setMessage] = useState('');
    console.log(router);
    const onSubmit = async (e) => {
        e.preventDefault();

        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ email: emailValue, eventId })
            });
            if(!response.ok) throw new Error(`Error:${response.status}` )
            const data = await response.json();
            setMessage(data.message);
            inputEmail.current.value = '';

            console.log('POST', data);
        } catch (e){
            console.log('Error', e);
        }
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
                    type="submit"
                className={styles.btn_registr}>Submit</button>
            </form>
        </div>
    )
}

export default SingleEvent;