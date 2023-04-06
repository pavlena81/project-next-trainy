import SingleEvent from '../../../src/components/events/eventCard'

const EventPage = ({ data }) => <SingleEvent data={data} />

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