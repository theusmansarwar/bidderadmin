import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Box,
  Switch,
  FormControlLabel,
  MenuItem,
  FormHelperText,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

import { FaCircleInfo } from "react-icons/fa6";

import InfoModal from "../../Components/Models/InfoModal";
import UploadFile from "../../Components/Models/UploadFile";
import { useAlert } from "../../Components/Alert/AlertContext";
import { createNewProducts } from "../../DAL/create";
import { updateProducts } from "../../DAL/edit";
import { fetchProductsbyid, fetchActiveArtists } from "../../DAL/fetch";

const AddProduct = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { id } = useParams();

  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [minimumBid, setMinimumBid] = useState("");
  const [auctionStartDate, setAuctionStartDate] = useState("");
  const [auctionEndDate, setAuctionEndDate] = useState("");
  const [artistId, setArtistId] = useState("");
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [catalogFile, setcatalogFile] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [soldOut, setSoldOut] = useState(false);

  const [open, setOpen] = useState(false);
  // ✅ Fetch active artists for dropdown
  useEffect(() => {
    const loadArtists = async () => {
      try {
        const res = await fetchActiveArtists();
        if (res.status === 200 && Array.isArray(res.artists)) {
          setArtists(res.artists);
        }
      } catch (err) {
        console.error("Error loading artists:", err);
      }
    };
    loadArtists();
  }, []);

  // ✅ Fetch Product by ID (Edit mode)
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await fetchProductsbyid(id);
        if (res.status === 200) {
          const product = res.product;
          setTitle(product.title || "");
          setDescription(product.description || "");
          setImage(product.image || "");
          setMinimumBid(product.minimumBid || "");
          setcatalogFile(product.catalogFile || "");
          setAuctionStartDate(product.auctionStartDate?.slice(0, 16) || "");
          setAuctionEndDate(product.auctionEndDate?.slice(0, 16) || "");
          setArtistId(product.artist?._id || ""); // ✅ populate artist
          setIsActive(product.isActive ?? true);
          setSoldOut(product.soldOut ?? false);
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
      title,
      description,
      image,
      minimumBid: Number(minimumBid),
      auctionStartDate,
      auctionEndDate,
      soldOut,
      isActive,
       artistId,
       catalogFile
    };

    try {
      const response = id
        ? await updateProducts(id, payload)
        : await createNewProducts(payload);

      if (response.status === 200 || response.status === 201) {
        showAlert("success", "Product saved successfully!");
        navigate("/products");
      } else if (response.missingFields) {
        const newErrors = {};
        response.missingFields.forEach((field) => {
          newErrors[field.name] = field.message;
        });
        setErrors(newErrors);
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
      <Button
        variant="filled"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          display: "flex",
          justifySelf: "flex-end",
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          top: "20px",
          right: "20px",
          gap: "5px",
          zIndex: 10,
        }}
      >
        Guide <FaCircleInfo />
      </Button>
      <InfoModal open={open} onClose={() => setOpen(false)} />
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
          error={!!errors.title}
          helperText={errors.title}
        />

        <TextField
          label="Art Description"
          multiline
          rows={8}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={!!errors.description}
          helperText={errors.description}
        />
<Typography variant="h6">Art Image</Typography>
        <UploadFile
          multiple
          accept="image/*"
          initialFile={image}
          onUploadComplete={(paths) => setImage(paths)}
          error={errors.image}
        />

        <TextField
          label="Minimum Bid"
          type="number"
          fullWidth
          value={minimumBid}
          onChange={(e) => setMinimumBid(e.target.value)}
          error={!!errors.minimumBid}
          helperText={errors.minimumBid}
        />

        <TextField
          label="Auction Start Date"
          type="datetime-local"
          fullWidth
          value={auctionStartDate}
          onChange={(e) => setAuctionStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          error={!!errors.auctionStartDate}
          helperText={errors.auctionStartDate}
        />
      
        <TextField
          label="Auction End Date"
          type="datetime-local"
          fullWidth
          value={auctionEndDate}
          onChange={(e) => setAuctionEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          error={!!errors.auctionEndDate}
          helperText={errors.auctionEndDate}
        />
          <Typography variant="h6">Art Catallog (if required)</Typography>
        <UploadFile
          multiple
          accept="application/pdf"
          initialFile={catalogFile}
          onUploadComplete={(paths) => setcatalogFile(paths)}
          error={errors.catalogFile}
        />


        <FormControl fullWidth error={!!errors.artistId}>
          <InputLabel id="artist-select-label">Select Artist</InputLabel>
          <Select
            labelId="artist-select-label"
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
            label="Select Artist"
          >
            <MenuItem value="">Select an Artist</MenuItem>
            {artists.map((a) => (
              <MenuItem key={a._id} value={a._id}>
                {a.artistName} ({a.artistCountry})
              </MenuItem>
            ))}
          </Select>
          {errors.artistId && <FormHelperText>{errors.artistId}</FormHelperText>}
        </FormControl>

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
              checked={!soldOut}
              onChange={() => setSoldOut(!soldOut)}
              color="primary"
            />
          }
          label={soldOut ? "Sold Out" : "In Stock"}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={() => navigate("/products")} sx={{color:"var(--background-color)", borderColor:"var(--background-color)"}}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={loading} sx={{backgroundColor:"var(--background-color)"}}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
