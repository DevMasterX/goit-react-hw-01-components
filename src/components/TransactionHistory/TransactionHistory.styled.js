import styled from 'styled-components';

export const Table = styled('table')(() => {
  return {
    display: 'block',
    width: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderCollapse: 'separate',
    'tr:nth-child(even)': {
      backgroundColor: 'rgba(173, 216, 230, 0.2)',
    },

    th: {
      width: '200px',
      backgroundColor: 'rgba(147, 216, 230, 1)',
      paddingTop: '8px',
      paddingBottom: '8px',
      color: 'white',
      textTransform: 'uppercase',
    },

    td: {
      border: '1px solid lightgray',
      padding: '8px',
      paddingLeft: '12%',
      textAlign: 'start',

      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  };
});
