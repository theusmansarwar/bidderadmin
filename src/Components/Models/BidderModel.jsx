import * as React from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { useAlert } from "../Alert/AlertContext";
import DeleteModal from "./confirmDeleteModel";
import { deleteAllBidders } from "../../DAL/delete";

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

export default function BidderModel({ open, setOpen, Modeldata, onResponse }) {
  const { showAlert } = useAlert();

  const [productName, setProductName] = React.useState("");
  const [minimumBid, setMinimumBid] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [userBid, setUserBid] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  React.useEffect(() => {
    if (Modeldata) {
      setProductName(Modeldata?.product?.title || "");
      setMinimumBid(Modeldata?.product?.minimumBid || "");
      setName(Modeldata?.bidder?.name || "");
      setEmail(Modeldata?.bidder?.email || "");
      setPhone(Modeldata?.bidder?.phone || "");
      setUserBid(Modeldata?.bidAmount || "");
    }
  }, [Modeldata]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    if (!Modeldata?._id) {
      showAlert("warning", "No bid selected for deletion");
      return;
    }

    setLoading(true);
    console.log("Attempting to delete bid ID:", Modeldata._id);

    try {
      const response = await deleteAllBidders({ ids: [Modeldata._id] });

      if (response.status === 200) {
        showAlert("success", response.message || "Bid deleted successfully");
        setOpenDeleteModal(false);
        setOpen(false);

        // Notify parent component to refresh data
        if (onResponse) {
          onResponse({
            messageType: "success",
            message: "Bid deleted successfully",
          });
        }
      } else {
        showAlert("error", response.message || "Failed to delete bid");
      }
    } catch (error) {
      console.error("Error in delete request:", error);
      showAlert("error", "Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Bid Details
          </Typography>

          <TextField
            sx={{ marginTop: "20px" }}
            fullWidth
            label="Product Name"
            variant="outlined"
            value={productName}
            InputProps={{ readOnly: true }}
          />

          <TextField
            sx={{ marginTop: "20px" }}
            fullWidth
            label="Bidder Name"
            variant="outlined"
            value={name}
            InputProps={{ readOnly: true }}
          />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              value={phone}
              InputProps={{ readOnly: true }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Minimum Bid"
              variant="outlined"
              value={minimumBid}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              label="User Bid"
              variant="outlined"
              value={userBid}
              InputProps={{ readOnly: true }}
            />
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}
          >
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setOpenDeleteModal(true)}
              disabled={loading}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        onConfirm={handleDelete}
        loading={loading}
      />
    </>
  );
}
