import {useParams} from "react-router";
import {testData} from "../data/test-data";
import {Alert, Container, Group, Paper, Rating, Text, ThemeIcon, Title} from "@mantine/core";
import * as PropTypes from "prop-types";


function IconMapPin(props) {
    return null;
}

IconMapPin.propTypes = {size: PropTypes.number};

function IconStar(props) {
    return null;
}

IconStar.propTypes = {size: PropTypes.number};
const Toilet = () => {
    const {id} = useParams();
    const toilet = testData.find((toilet) => toilet.id === id);
    if (!toilet) {
        return (
            <Container size="md" mt="xl">
                <Alert color="red" title="Error">
                    Toilet not found
                </Alert>
            </Container>
        );
    }
    return (
        <Container size="md" mt="xl">
            <Paper shadow="sm" radius="md" p="xl">
                <Title order={1} mb="md">{toilet.name}</Title>
                <Text size="lg" mb="md">{toilet.description}</Text>
                <Group mb="md">
                    <ThemeIcon size="lg" color="blue">
                        <IconMapPin size={20} />
                    </ThemeIcon>
                    <Text>{toilet.location}</Text>
                </Group>
                <Group>
                    <ThemeIcon size="lg" color="yellow">
                        <IconStar size={20} />
                    </ThemeIcon>
                    <Rating value={toilet.rating} readOnly />
                </Group>
            </Paper>
        </Container>
    )
}
export default Toilet