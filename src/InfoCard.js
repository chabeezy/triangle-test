import Accordion from 'react-bootstrap/Accordion';

const InfoCard = () => {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>App Specification</Accordion.Header>
            <Accordion.Body>
                <p>The form takes three integer length values from an input dialog that correspond to the sides of a triangle.</p>
                <p>When submitted, the application displays a message stating whether the triangle is scalene, isoceles or equilateral.</p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export default InfoCard;