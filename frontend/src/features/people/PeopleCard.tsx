import {Badge, Card, ListGroup} from "react-bootstrap";
import image from '../../assets/whois.jpeg';

const PeopleCard = ({ person }) => {
    if (!person) {
        return (
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title>Select a character</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Click on a name to view details
                    </Card.Subtitle>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Height:</strong> —</ListGroup.Item>
                    <ListGroup.Item><strong>Mass:</strong> —</ListGroup.Item>
                    <ListGroup.Item><strong>Birth Year:</strong> —</ListGroup.Item>
                    <ListGroup.Item><strong>Homeworld:</strong> —</ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }

    return (

        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {person.meta.faction} • {person.gender}
                </Card.Subtitle>
            </Card.Body>

            <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong>Height:</strong> {person.heightCm} cm
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Mass:</strong> {person.massKg} kg
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Birth Year:</strong> {person.birthYearBBY} BBY
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Homeworld:</strong> {person.homeworld.name}
                </ListGroup.Item>
            </ListGroup>

            <Card.Body>
                <Badge bg={person.meta.isJedi ? 'success' : 'secondary'}>
                    {person.meta.isJedi ? 'Jedi' : 'Not Jedi'}
                </Badge>
                {' '}
                {person.meta.isForceUser && (
                    <Badge bg="warning">Force User</Badge>
                )}
            </Card.Body>

            <Card.Body>
                <Card.Link href={`/people/${person.id}`}>Details</Card.Link>
                <Card.Link href={`/starships`}>Starships</Card.Link>
            </Card.Body>
        </Card>

    )
}
export default PeopleCard;
