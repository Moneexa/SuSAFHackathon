import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';


export default function Header() {
    return (
        <AppBar position="static" className="h-100">
            <Toolbar sx={{ height: 64 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}