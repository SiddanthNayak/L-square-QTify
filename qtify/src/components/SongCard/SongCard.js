import React from "react";
import style from "./SongCard.module.css";
import { Card, CardMedia, CardContent } from "@mui/material";

const SongCard = () => {
  return (
    <div className={style.musicCard}>
      <Card
        sx={{ maxWidth: "159px", borderRadius: "10px", marginBottom: "6px" }}
      >
        <CardMedia
          sx={{ height: 170 }}
          image="music_cover.png"
          title="Music Cover"
        />
        <CardContent className={style.cardContent}>
          <div className={style.chip}>
            <p className={style.chipText}>100M Follows</p>
          </div>
        </CardContent>
      </Card>
      <p className={style.songTitle}>New Bollywood</p>
    </div>
  );
};

export default SongCard;
