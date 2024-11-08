import { Grid, Typography } from "@mui/material";
import React from "react";
import MemberCard from "./Components/MemberCard";
import Prasanna from "../../assets/images/PrasanaSir.jpg";
import Samadhi from "../../assets/images/SamadhiSir.jpg";
import CSKSir from "../../assets/images/CSKSir.png";
import Dhanuka from "../../assets/images/Dhanuka.png";
import Hamza from "../../assets/images/Hamza.jpg";
import Sithara from "../../assets/images/Sithara.png";
import Uthpala from "../../assets/images/Uthpala.jpg";
const AboutUs = ({ refProps }) => {
  const { AboutUsRef } = refProps;
  return (
    <>
      <Grid
        container
        ref={AboutUsRef}
        sx={{
          minHeight: "calc(100vh - 64px)",
          padding: "5%",

        }}
        rowGap={2}
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="overline">About Us</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            Meet Our Team !
          </Typography>
        </Grid>

        <Grid item container xs={12} rowGap={2} columnSpacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <MemberCard
              imageUrl={Prasanna}
              name={"DR. PRASANNA SUMATHIPALA"}
              role={"Supervisor"}
              position={"Senior Lecturer"}
              linkedIn={"https://www.linkedin.com/in/prasanna-s-haddela-2751037/"}
              email={"prasanna.s@sliit.lk"}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <MemberCard
              imageUrl={Samadhi}
              name={"Mr. Samadhi 	Rathnayake"}
              role={"Co-Supervisor"}
              position={"Lecturer"}
              linkedIn={
                "https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/"
              }
              email={"samadhi.r@sliit.lk"}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <MemberCard
              imageUrl={CSKSir}
              name={"Mr. C.S.K. Millawithanaarachchi"}
              role={"EXTERNAL Supervisor"}
              position={"Criminologist"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Dhanuka}
            name={"Dhanuka Dayawansa"}
            role={"Group Leader"}
            position={"Undergraduate"}
            Department={"Data Science"}
            linkedIn={"https://www.linkedin.com/in/dhanukadayawansa/"}
            email={"it21039904@sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Hamza}
            name={"Hamza Nauzad"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Data Science"}
            linkedIn={"http://www.linkedin.com/in/ahemad-hamza-39ab2a23b"}
            email={"it21047206@my.sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Sithara}
            name={"Sithara Kumarasingha"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Software Engineering"}
            linkedIn={"https://www.linkedin.com/in/sithara-kumarasingha-161647229/"}
            email={"it20151638@my.sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Uthpala}
            name={"Uthpala Aththanayaka"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Software Engineering"}
            linkedIn={"https://www.linkedin.com/in/uthpala-aththanayaka"}
            email={"it20259334@my.sliit.lk"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
