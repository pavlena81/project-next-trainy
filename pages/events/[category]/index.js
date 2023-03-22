import Image from 'next/image'


const EventsCategoryPage = ({data}) => {
    return (
        <div>
            <h1>Events in London</h1>
            {data ?
                <div>
                {data.map((ev) => (
                    <a key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
               
                    <Image  src={ev.image} alt={ev.title} width={300} height={300} />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p></a>
                ))}
                </div>
            : ' '}
           
        </div>
    )
}

export default EventsCategoryPage;

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/data.json');
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                category: ev.id.toString(),
            },
        }
    });
   
  return {
      paths: allPaths,
      fallback: false,
  }
}

export async function getStaticProps(context) {
    
    const id = context?.params.category;
    const { allEvents } = await import('../../../data/data.json')
    const data = allEvents.filter((ev) => ev.city === id);
    
    return {
      
        // Passed to the page component as props
        props: { data },
    }
}