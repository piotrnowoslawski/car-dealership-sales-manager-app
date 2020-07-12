import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const List = styled.ul``;

export const ListItem = styled.li``;

export const StyledLink = styled(NavLink).attrs({ active })``;
