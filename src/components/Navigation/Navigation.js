import React from "react";
import {
  Container,
  List,
  ListItem,
  StyledLink,
  ListItemImg,
  ListItemText,
} from "./Navigation.css";

const Navigation = ({ items }) => {
  return (
    <Container>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <StyledLink to={item.link}>
              <ListItemImg
                src={require(`images/navigation/nav-${item.iconPath}-icon.png`)}
                alt={item.iconName}
              />
              <ListItemText>{item.title}</ListItemText>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
