import React, { useEffect, useState } from "react";
import Carousel from "../Caraousel/Carousel";
import SongCard from "../SongCard/SongCard";
import style from "./Section.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Section = ({ title, data, genre }) => {
  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false);
  const [genreFilter, setGenreFilter] = useState([]);
  const [filter, setFilter] = useState("all");

  const getData = () => {
    data()
      .then((response) => {
        console.log(response);
        setSongs(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGenres = () => {
    genre()
      .then((response) => {
        setGenreFilter(response.data, { key: "all", label: "All" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    console.log("click");
    setShow(!show);
  };

  const handleFilter = (event, newValue) => {
    setFilter(newValue);
  };

  useEffect(() => {
    getData();
    if (genre) {
      getGenres();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.container}>
      <div className={genre ? null : `${style.titleContainer}`}>
        <p className={style.title}>{title}</p>
        {genre ? (
          <Tabs className={style.tabs} onChange={handleFilter} value={filter}>
            <Tab className={style.tabs} value="all" label="All" />
            {genreFilter.map((genre, index) => {
              return (
                <Tab
                  key={index}
                  className={style.tabs}
                  value={genre.key}
                  label={genre.label}
                />
              );
            })}
          </Tabs>
        ) : (
          <div onClick={handleClick} className={style.showButton}>
            <p>{show ? "Collapse" : "Show All"}</p>
          </div>
        )}
      </div>
      {show ? (
        <div className={style.cardGrid}>
          {songs.map((song) => {
            return (
              <SongCard
                key={song.id}
                title={song.title}
                image={song.image}
                follows={song.follows}
              />
            );
          })}
        </div>
      ) : (
        <Carousel
          songs={songs}
          renderComponent={(song) => (
            <SongCard
              title={song.title}
              image={song.image}
              follows={song.follows ? song.follows : song.likes}
            />
          )}
        />
      )}
    </div>
  );
};

export default Section;
