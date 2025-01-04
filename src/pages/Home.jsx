import {Anchor, Container, List, ListItem, Text, ThemeIcon} from '@mantine/core';
import {testData} from "../data/test-data";

const Home = () => {
    const demoProps = {
        mt: 'md',
        mx: 'md',
    };

    const groupByLocation = (toilets) => {
        let locations = {};
        toilets.forEach((toilet) => {
            const location = toilet.location;
            if (!locations[location]) {
                locations[location] = [];
            }
            locations[location].push(toilet);
        });

        // Sort locations alphabetically
        const sortedLocations = {};
        Object.keys(locations).sort().forEach((key) => {
            sortedLocations[key] = locations[key];
        });
        locations = sortedLocations;
        return locations;
    };

    return (
        <Container fluid {...demoProps}>
            <Container size="lg" py="xl">
                <Text
                    component="h1"
                    align="center"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                    size="xl"
                    weight={700}
                    style={{ marginBottom: 30 }}
                >
                    FluidMobility is <Text component="span" inherit fw={900}>*the*</Text> toilet directory for IIUM Gombak
                </Text>

                <Text
                    component="h2"
                    size="lg"
                    weight={700}
                    style={{ marginBottom: 20 }}
                    color="dimmed"
                    align="center"
                >
                    Find the nearest toilet
                </Text>

                <List spacing="lg" size="lg" center style={{ maxWidth: 600, margin: '0 auto' }}>
                    {Object.keys(groupByLocation(testData)).map((location) => (
                        <List.Item key={location}>
                            <Text
                                size="xl"
                                fw={900}
                                variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                                mb="md"
                            >
                                {location}
                            </Text>

                            <List
                                spacing="sm"
                                size="md"
                                center
                                icon={
                                    <ThemeIcon color="teal" size={28} radius="xl">
                                        {/*<IconMapPin size={16} />*/}
                                    </ThemeIcon>
                                }
                            >
                                {groupByLocation(testData)[location].map((toilet) => (
                                    <List.Item key={toilet.id}>
                                        <Anchor
                                            href={`/toilets/${toilet.id}`}
                                            underline="hover"
                                            color="teal"
                                            weight={600}
                                            size="md"
                                        >
                                            {toilet.name}
                                        </Anchor>
                                    </List.Item>
                                ))}
                            </List>
                        </List.Item>
                    ))}
                </List>
            </Container>
        </Container>
    )
}
export default Home