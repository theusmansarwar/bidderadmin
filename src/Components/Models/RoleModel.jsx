import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  MenuItem,
} from "@mui/material";
import { updateRegisteredUser } from "../../DAL/edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

export default function RoleModel({
  open,
  setOpen,
  Modeltype,
  Modeldata,
  onResponse,
}) {
  const [name, setName] = React.useState(Modeldata?.name || "");
  const [email, setEmail] = React.useState(Modeldata?.email || "");
  const [phone, setPhone] = React.useState(Modeldata?.phone || "");
  const [role, setRole] = React.useState(Modeldata?.role || "");
  const [id, setId] = React.useState(Modeldata?._id || "");

  React.useEffect(() => {
    setName(Modeldata?.name || "");
    setEmail(Modeldata?.email || "");
    setPhone(Modeldata?.phone || "");
    setRole(Modeldata?.role || "");
    setId(Modeldata?._id || "");
  }, [Modeldata]);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      phone,
      role,
    };

    let response;
    if (Modeltype.toLowerCase() === "update") {
      response = await updateRegisteredUser(id, payload);
    }

    if (response.status === 200 || response.status === 201) {
      onResponse({ messageType: "success", message: response.message });
    } else {
      onResponse({ messageType: "error", message: response.message });
    }

    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {Modeltype} User
        </Typography>

        <TextField
          sx={{ marginTop: "20px" }}
          fullWidth
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ marginTop: "20px" }}
          fullWidth
          required
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          sx={{ marginTop: "20px" }}
          fullWidth
          required
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          fullWidth
          select
          required
          label="Role"
          variant="outlined"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button
            type="button"
            variant="contained"
            sx={{ backgroundColor: "#B1B1B1" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{
              background: "var(--background-color)",
              color: "var(--text-color)",
              borderRadius: "var(--default-border-radius)",
              "&:hover": { background: "var(--vertical-gradient)" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
