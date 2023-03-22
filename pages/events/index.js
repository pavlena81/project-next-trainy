import Image from 'next/legacy/image'

const EventsPage = ({ data }) => {
    <div>
        {data.map((ev) => (
            <a key={ev.id} href={`/events/${ev.id}`}>
          <Image  src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
                
        </a>
        ))}
    </div>
    return (
        <div>
            <h1>Event Page</h1>
            <div>
            <a href=''> <img/> <h2>Events in Netherlands</h2> </a>

            <a href=''> <img/> <h2>Events in Sangerhausen</h2> </a>
        
            <a href=''> <img/> <h2>Events in England</h2> </a>
            </div>
        </div>
    )
}

export default EventsPage;

export async function getServerSideProps() {
  const { events_categories} = await import('../../data/data.json')
  
    return {
        props: {
           data: events_categories,
        },
    }
}