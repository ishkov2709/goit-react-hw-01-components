import PropTypes from 'prop-types'
import makeStatsItem from "components/utils/makeStatsItems";
import { Section, Title, List } from "./Statistics.styled"
import { Item } from "./Item/Item"

export const Statistics = ({ stats }) => {
    return <Section>
      <Title title="Upload stats">Upload stats</Title>
      <List>
        {makeStatsItem(stats, Item)}
      </List>
</Section>
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
}