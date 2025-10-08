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
import { useAlert } from "../../Components/Alert/AlertContext";
import { addArtist } from "../../DAL/create";
import { updateArtist } from "../../DAL/edit";
import { fetchArtists, fetchArtistsbyid } from "../../DAL/fetch";

const AddArtist = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { id } = useParams();
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [artistCountry, setArtistCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(true); // ✅ Published switch
  const [isFeatured, setIsFeatured] = useState(false);

  // ✅ Fetch Artist by ID (Edit mode)
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await fetchArtistsbyid(id);
        if (res.status === 200) {
          const data = res.artist;
          setArtistName(data.artistName || "");
          setArtistBio(data.artistBio || "");
          setArtistCountry(data.artistCountry || "");
          setIsActive(data.isActive ?? true);
          setIsFeatured(data.isFeatured ?? false);
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
        ? await updateArtist(id, payload)
        : await addArtist(payload);

      if (response.status === 200 || response.status === 201) {
        showAlert("success", "Artist Added successfully!");
        navigate("/artists");
      } else {
        showAlert("error", response.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error saving Artist Data:", err);
      showAlert("error", "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {id ? "Edit Artist Data" : "Add Artist Data"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
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
              checked={isFeatured}
              onChange={() => setIsFeatured(!isFeatured)}
              color="primary"
            />
          }
          label={isFeatured ? "Featured" : "Not Featured"}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={() => navigate("/artists")}>
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
