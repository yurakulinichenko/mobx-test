const HomeStyles = (theme) => {
  return {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  };
};

export { HomeStyles };
