import PropTypes from 'prop-types';

import {
  StatisticsWrap,
  StatisticsTitle,
  StatisticList,
  StatisticsItem,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

      <StatisticList>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsItem key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticList>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
