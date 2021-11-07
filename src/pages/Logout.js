import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Typography, Box } from "@mui/material";

function Logout() {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("token");
    history.push("/");
  }, [history]);

  return (
    <>
    <p>Voce Saiu</p>
    </>
  );
}

export default Logout;