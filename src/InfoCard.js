import Dropdown from 'react-bootstrap/Dropdown';

const InfoCard = () => {
    return(
        <Dropdown align="end">
            <Dropdown.Toggle className="btn btn-outline-light float-end" id="dropdown-basic" data-testid="info-button">
                App Specification
            </Dropdown.Toggle>
    
            <Dropdown.Menu data-testid="info-dropdown" className="shadow-sm">
                <Dropdown.ItemText>
                    <p>The form takes three integer length values from an input dialog that correspond to the sides of a triangle.</p>
                    <p>When submitted, the application displays a message stating whether the triangle is scalene, isosceles, or equilateral.</p>
                </Dropdown.ItemText>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default InfoCard;