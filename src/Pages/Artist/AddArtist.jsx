import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import UploadFile from "../../Components/Models/UploadFile";
import { useAlert } from "../../Components/Alert/AlertContext";
import { addArtist, createNewProducts } from "../../DAL/create";
import { updateProducts } from "../../DAL/edit";
import { fetchProductsbyid } from "../../DAL/fetch";

const AddArtist = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [minimumBid, setMinimumBid] = useState("");
  const [auctionStartDate, setAuctionStartDate] = useState("");
  const [auctionEndDate, setAuctionEndDate] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [artistCountry, setArtistCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(true); // ✅ Published switch
  const [isFeatured, setIsFeatured] = useState(false);

  // ✅ Fetch Product by ID (Edit mode)
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await fetchProductsbyid(id);
        if (res.status === 200) {
          const product = res.product;
          setArtistName(product.artistName || "");
          setArtistBio(product.artistBio || "");
          setArtistCountry(product.artistCountry || "");
          setIsActive(product.isActive ?? true);
          setIsFeatured(product.isFeatured ?? false);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchData();
  }, [id]);

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      artistName,
      artistBio,
      artistCountry,
      isActive,
      isFeatured,
    };

    try {
      const response = id
        ? await updateProducts(id, payload)
        : await addArtist(payload);

      if (response.status === 200 || response.status === 201) {
        showAlert("success", "Product saved successfully!");
        navigate("/products");
      } else {
        showAlert("error", response.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error saving product:", err);
      showAlert("error", "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {id ? "Edit Auction Product" : "Add Auction Product"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          label="Art Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Art Description"
          multiline
          rows={3}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <UploadFile
          multiple
          accept="image/*"
          initialFile={image}
          onUploadComplete={(paths) => setImage(paths)}
        />

        <TextField
          label="Minimum Bid"
          type="number"
          fullWidth
          value={minimumBid}
          onChange={(e) => setMinimumBid(e.target.value)}
        />

        <TextField
          label="Auction Start Date"
          type="datetime-local"
          fullWidth
          value={auctionStartDate}
          onChange={(e) => setAuctionStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="Auction End Date"
          type="datetime-local"
          fullWidth
          value={auctionEndDate}
          onChange={(e) => setAuctionEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="Artist Name"
          fullWidth
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />

        <TextField
          label="Artist Bio"
          multiline
          rows={2}
          fullWidth
          value={artistBio}
          onChange={(e) => setArtistBio(e.target.value)}
        />

        <TextField
          label="Artist Country"
          fullWidth
          value={artistCountry}
          onChange={(e) => setArtistCountry(e.target.value)}
        />
        <FormControlLabel
          control={
            <Switch
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
              color="primary"
            />
          }
          label={isActive ? "Published" : "Draft"}
        />

        <FormControlLabel
          control={
            <Switch
              checked={!isFeatured}
              onChange={() => setIsFeatured(!isFeatured)}
              color="primary"
            />
          }
          label={isFeatured ? "Featured" : "Not Featured"}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={() => navigate("/products")}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddArtist;
