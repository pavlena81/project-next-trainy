import Image from 'next/image'; 
import styles from '../../../styles/Home.module.css';

const EventPage = ({ data }) => {
    return (
        <div>            
            <Image src={data.image} width={900} height={500} alt={data.title} />
            <h1>{data.title}</h1>
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

export default EventPage;

export async function getStaticPaths() {
    const data = await import('../../../data/data.json');
    const allEvents = data.allEvents;
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                category: path.city,
                id: path.id,
            }  // See the "paths" section below   
            
        }
    });
    return {
        paths: allPaths,
        fallback: false,
        }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const { allEvents } = await import('../../../data/data.json');
    const eventData = allEvents.find((ev) => id === ev.id);
  //const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: eventData,
    },
  };
}