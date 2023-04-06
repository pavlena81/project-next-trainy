import Image from 'next/image'; 
import styles from '../../../styles/Home.module.css';

const SingleEvent = ({data}) => {
     return (
         <div> 
            <h1>{data.title}</h1> 
            <Image src={data.image} width={900} height={500} alt={data.title} />
            <p>{data.description}</p>
            <form className={styles.email_registration}>
               <input className={styles.input}
                type="email"
                id="email"
                placeholder="Please insert your email here"/>
                <button
                    type="Submit"
                className={styles.btn_registr}>Submit</button>
            </form>
        </div>
    )
}

export default SingleEvent;