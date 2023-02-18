import PropTypes from 'prop-types';
import { Title, List, ListItem, Container, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(item => (
          <ListItem key={item.id} bgColor={getRandomHexColor()}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </ListItem>))}
      </List>
    </Container>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};