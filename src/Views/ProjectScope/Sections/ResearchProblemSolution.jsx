import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import conceptualDiagram from "../../../assets/images/ResearchSolutionCrime.jpg";

const ResearchProblemSolution = () => {
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
          <Typography variant="h6">Research Problem Solution</Typography>
        </Grid>
        <Grid item xs={6}>
        <img
                alt="amLogo"
                src={conceptualDiagram}
                style={{
                  width: "75%",
                  height: "auto",
                }}/>
        </Grid>
        <Grid item xs={6}>
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
                The Developing a Decision Supporting Tool for the Police Department is a comprehensive solution designed to enhance public safety by integrating and analyzing four vital components: Crime insight, Accident insight, Narcotics insight, and Child and Women Protection insight modules. The Crime insight module focuses on cataloging and analyzing historical crime data to identify patterns and hotspots using law enforcement records, court documents, and incident reports. The Accident insight module evaluates traffic and non-traffic accidents to improve safety measures, utilizing police reports, insurance records, and emergency response data. The Narcotics insight module monitors narcotics-related issues, supporting law enforcement efforts through narcotics unit reports, undercover operations, and community tip-offs. The Child and Women Protection insight module safeguards vulnerable populations by tracking and responding to incidents affecting children and women using social services reports, child protection agencies, and domestic violence records.
                The analytical framework employs advanced analytics and visualization techniques to derive actionable insights, facilitating real-time monitoring, predictive modeling, and proactive strategy identification for the police department. The benefits include improved resource allocation, enhanced community safety through targeted interventions, informed policymaking, and increased public trust through transparent, evidence-based practices. The tool empowers law enforcement agencies with comprehensive data analysis, contributing to a safer and more secure community. The conceptual diagram depicts the integration of the four modules, feeding into an analytical framework, resulting in informed decision-making for law enforcement.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ResearchProblemSolution;
