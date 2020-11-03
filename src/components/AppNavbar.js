import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from "reactstrap";

const Example = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="dark" dark fixed="top" expand="md">
			<Container>
				<NavbarBrand href="/">SMS</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/student">Show Students</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/addstudent">Add Student</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default Example;
