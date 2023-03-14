import React from "react";
import style from "./SongCard.module.css";
import { Card, CardMedia, CardContent } from "@mui/material";

const SongCard = ({ title, follows, image }) => {
  const toShortNum = (follows) => {
    if (follows > 999999) {
      return Math.floor(follows / 1000000) + "M";
    } else {
      return Math.floor(follows / 1000) + "K";
    }
  };

  return (
    <div className={style.musicCard}>
      <Card sx={{ width: "159px", borderRadius: "10px", marginBottom: "6px" }}>
        <CardMedia sx={{ height: 170 }} image={image} title="Music Cover" />
        <CardContent className={style.cardContent}>
          <div className={style.chip}>
            <p className={style.chipText}>{toShortNum(follows)} Follows</p>
          </div>
        </CardContent>
      </Card>
      <p className={style.songTitle}>{title}</p>
    </div>
  );
};

export default SongCard;
