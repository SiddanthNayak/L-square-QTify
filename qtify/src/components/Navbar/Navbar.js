import React from "react";
import { Box, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const clickHandler = () => {
    console.log("Click");
  };

  return (
    <Box className={styles.header} sx={{ backgroundColor: "primary.main" }}>
      <Box>
        <img src="Logo.png" alt="Qtify-Logo"></img>
      </Box>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          aria-label="search"
          type="text"
          placeholder="Search for a song of your choice"
        />
        <div className={styles.searchIcon}>
          <Search />
        </div>
      </div>
      <Button
        sx={{
          color: "primary.main",
          borderRadius: "12px",
          padding: "10px 16px",
          textTransform: "none",
        }}
        variant="contained"
        color="secondary"
        onClick={() => clickHandler()}
      >
        Give Feedback
      </Button>
    </Box>
  );
};

export default Navbar;
