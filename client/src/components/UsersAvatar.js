import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function UsersAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="User function"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80 }}
      />
    </Stack>
  );
}
