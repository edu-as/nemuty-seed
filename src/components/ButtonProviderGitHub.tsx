import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn, signOut, useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonProviderGitHub(Users) {
  const { data: session } = useSession();

  return (
    <Typography variant="h3" component="h3">
      {session ? (
        <>
          <Typography variant="h3" component="h2">
            {session?.user?.name}
          </Typography>
          <Button variant="outlined" onClick={() => signOut()}>
            {" "}
            Sair{" "}
          </Button>
        </>
      ) : (
        <Button
          variant="outlined"
          endIcon={<GitHubIcon />}
          onClick={() => signIn("github")}
        >
          {" "}
          Logar com sua conta GitHub{" "}
        </Button>
      )}
    </Typography>
  );
}
