import styled from 'styled-components';

export const Friend = styled('li')(() => {
  return {
    display: 'flex',

    justifyContent: 'start',
    alignItems: 'center',
    gap: '30px',
    padding: '10px 30px',
    borderColor: 'grey',
    boxShadow: `0px 0px 5px 0px #000`,
    marginBottom: '10px',
    borderRadius: '10px',
  };
});

export const Status = styled('span')(({ isOnline }) => {
  return {
    display: 'block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
  };
});
export const NameText = styled('p')(() => {
  return {
    fontSize: '24px',
    fontWeight: 'bold',
  };
});
