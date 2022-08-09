export const ViewedVideosStyles = (theme) => {
  return {
    ml: '20px',
    border: '1px solid rgb(118, 118, 118)',
    borderRadius: '5px',
    padding: '10px',
    minWidth: '40%',
    [theme.breakpoints.down('md')]: {
      ml: '0',
      mt: '20px',
    },
  };
};

export const LinkStyles = {
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'inherit',

  '&:hover': {
    color: '#ff0000',
  },
};

export const ListItemTextStyles = {
  display: 'flex',
  alignItems: 'center',
  '& img': {
    mr: '15px',
  },
};
