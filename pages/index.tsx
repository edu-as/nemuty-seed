import * as React from 'react';
import type { NextPage } from 'next';
import SignInSide from '../src/components/Login';
import ButtonProviderGitHub from '../src/components/ButtonProviderGitHub';

const Home: NextPage = () => {
  return (
    <>
      <SignInSide />
      <ButtonProviderGitHub />
    </>
  );
};

export default Home;