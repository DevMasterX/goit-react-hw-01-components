import styled from 'styled-components';

import getRandomHexColor from 'helpers/random-color';

export const StatisticsWrap = styled('section')(() => {
  return {
    margin: 'auto',
    marginBottom: '40px',
    width: '400px',
    borderColor: 'grey',
    boxShadow: `0px 0px 5px 0px #000`,
    borderRadius: '10px',

    textAlign: 'center',
    overflow: 'hidden',
  };
});

export const StatisticsTitle = styled('h2')(() => {
  return {
    display: 'block',
    padding: '40px 80px',
    margin: '0',
  };
});

export const StatisticList = styled('ul')(() => {
  return {
    display: 'flex',
    padding: 0,
    margin: '0',
  };
});

export const StatisticsItem = styled('li')(() => {
  return {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

    paddingBottom: '20px',
    paddingTop: '20px',
    border: '1px solid #ccc',
    backgroundColor: getRandomHexColor(),
    color: 'white',
  };
});

export const Percentage = styled('span')(() => {
  return {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: '700',
  };
});
