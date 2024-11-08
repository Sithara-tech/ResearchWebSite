import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import SystemDirgram from "../../../assets/images/systemDirgram.png";
const Methodology = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={4}
        sx={{
          paddingLeft: "5%",
        }}
      >
        <Grid item xs={12}>
          <Typography  variant="h6" >Methodology</Typography>
        </Grid>
        {/* <Grid item xs={6}>
          <img
            alt="amLogo"
            src={SystemDirgram}
            style={{
              width: "75%",
              height: "auto",
            }}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              {/* <Typography
                color={"primary"}
                gutterBottom
                variant="h6"
                component="div"
              >
                sdfghjkl;''
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Marks Allocated :
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                Developing an intelligent software system for Sri Lankan policing involves a structured, multi-phase approach. It begins with requirement gathering through stakeholder engagement to identify challenges in crime record entry. This is followed by data collection and preprocessing, incorporating essential crime data and external factors to enhance prediction accuracy. The system design focuses on a user-friendly interface, a scalable microservices-based backend, and distributed databases. During the predictive model development, advanced algorithms are used, complemented by Explainable AI techniques to ensure transparency. The system integrates geospatial visualization tools for real-time crime analysis, while rigorous testing and validation ensure functionality, security, and user acceptance. The deployment is cloud-based, with continuous monitoring for performance optimization. Finally, training and capacity building support system adoption, with ongoing evaluation to measure its impact on crime prevention and decision-making.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Methodology;
