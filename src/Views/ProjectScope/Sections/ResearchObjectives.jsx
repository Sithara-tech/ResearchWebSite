import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ResearchObjectives = () => {
  return (
    <>
      <Grid
        container
        sx={{
          paddingLeft: "5%",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Research Objectives</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              {/* <Typography color={"primary"} gutterBottom variant="h6" component="div">
      
        </Typography> */}
              <Typography gutterBottom variant="subtitle1" component="div">
                Main Research Objective
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Develop a comprehensive intelligent software solution aimed at transforming decision-making within Sri Lankan policing. 
                This system will enhance the crime record entry process by providing an intuitive and user-friendly interface, 
                ensuring seamless and accurate data collection. It will also implement a robust distributed framework capable of handling large-scale data from multiple locations efficiently.
                Additionally, the software will integrate advanced data visualization and geographic mapping tools to analyze crime patterns, offering actionable insights into crime hotspots and trends. 
                Finally, the system will employ predictive policing techniques using machine learning algorithms to forecast potential criminal activities, 
                allowing law enforcement to take proactive measures to prevent and control crimes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default ResearchObjectives;
