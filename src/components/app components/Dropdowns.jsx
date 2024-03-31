import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownButton() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownButton;