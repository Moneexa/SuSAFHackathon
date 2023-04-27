import { AppBar, Typography } from '@mui/material';

const styles = {
  appBar: {
    position: 'fixed',
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundColor: '#0d1b2a',
    color: '#ff6b81',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
    height: 'calc(100vh / 15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center'
  }
}

export default function Header() {
  return (
    <AppBar style={styles.appBar}>
      <Typography variant="h6" style={styles.title}>
        SUSAF ANALYSIS
      </Typography>
    </AppBar>
  );
}
