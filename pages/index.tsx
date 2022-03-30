import * as React from 'react';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h1">
          Welcome to Nemuty Seed { session ? (
            <>
              <Typography variant="h3" component="h2">{session?.user?.name}</Typography>
              <Button variant="outlined" startIcon={<LoginIcon />} onClick={() => signOut()} > Sair </Button>
            </>
          ) : (
            <Button  variant="outlined" startIcon={<LogoutIcon />} onClick={() => signIn ("github")} > Entrar </Button>
            )}
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
};

export default Home;