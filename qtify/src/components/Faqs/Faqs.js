import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./Faqs.module.css";

const Faqs = () => {
  return (
    <div className={style.container}>
      <div>
        <h2>FAQs</h2>
        <Accordion className={style.accordian}>
          <AccordionSummary
            className={style.question}
            expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Is QTify free to use?</p>
          </AccordionSummary>
          <AccordionDetails className={style.accordianDetails}>
            <p>Yes! It is 100% free, and has 0% ads!</p>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordian}>
          <AccordionSummary
            className={style.question}
            expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p>Can I download and listen to songs offline?</p>
          </AccordionSummary>
          <AccordionDetails className={style.accordianDetails}>
            <p>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
