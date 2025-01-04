import {Anchor, Container, List, ListItem} from '@mantine/core';
import {testData} from "../data/test-data";

const Home = () => {
    const demoProps = {
        mt: 'md',
        mx: 'md',
    };

    /**
     * Groups the given toilets by their location.
     * @param {Object[]} toilets - An array of toilet objects.
     * @param {string} toilets[].location - The location of the toilet.
     * @returns {Object} - An object where the keys are the unique locations and the values are arrays of toilets for that location.
     */
    const groupByLocation = (toilets) => {
        const locations = {};
        toilets.forEach((toilet) => {
            const location = toilet.location;
            if (!locations[location]) {
                locations[location] = [];
            }
            locations[location].push(toilet);
        });
        return locations;
    };
    return (
        <Container fluid  {...demoProps}>
            <div className="home">
                <h1>FluidMobility is <b>*the*</b> toilet directory for IIUM Gombak</h1>
            </div>
            <List spacing="md" sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <h2>Find the nearest toilet</h2>
                {Object.keys(groupByLocation(testData)).map((location) => (
                    <List.Item key={location}>
                        <h3>{location}</h3>
                        <List>
                            {groupByLocation(testData)[location].map((toilet) => (
                                <List.Item key={toilet.id}>
                                    <Anchor   href={`/toilets/${toilet.id}`}>{toilet.name}</Anchor>
                                </List.Item>
                            ))}
                        </List>
                    </List.Item>
                ))}
            </List>
        </Container>

    )
}

export default Home