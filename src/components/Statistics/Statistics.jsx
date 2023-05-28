import PropTypes from 'prop-types';
import { Section, Title, List } from './Statistics.styled';
import { Item } from './Item/Item';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title title={title}>{title}</Title>}
      <List>
        {stats.map(stat => {
          const { id, label, percentage } = stat;
          return <Item key={id} label={label} percentage={percentage} />;
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
