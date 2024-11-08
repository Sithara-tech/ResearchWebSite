import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ResearchGap = () => {
  return (
  <>
  <Grid container
     sx={{
      paddingLeft:"5%",
     }}
    >
      <Grid item xs={12}>
        <Typography variant="h6">Research Problem</Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={12}>
      <Card sx={{ Width: "50%" }}>
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
                Police departments today face the multifaceted challenge of maintaining community safety and effectively prioritizing resources in the face of threats from crime, traffic accidents, narcotics issues, and risks to vulnerable groups. However, resource allocation decisions are predominantly reactionary rather than data-driven and predictive. Recent advances have demonstrated the potential for predictive analytics and optimization to enhance law enforcement planning. But these tools have focused narrowly on modeling crime rates alone. Our research will develop an integrated decision support system that provides a comprehensive view of evolving public safety risks across multiple areas – crime patterns, traffic accidents, narcotics activity, and child/woman safety incidents based on diverse data sources. Advanced forecasting algorithms will identify emerging hotspots and trends within each area . The system will then recommend optimized resource allocation plans considering predictive insights across all areas jointly versus in silos.
                The research will provide a template for harnessing disparate data streams through an integrated predictive optimization paradigm to drive strategic decisions. It will also demonstrate the advantages over predictive-only tools for police departments in managing multifaceted threats.
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    </Grid>
  </>);
};

export default ResearchGap;
