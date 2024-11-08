import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bannerWelcome from "../../assets/images/HeroSection.png";
import pleaserateus from "../../assets/images/pleaserateus.png";
const HeroSection = ({ refProps }) => {
  const { heroSectionsRef, projectScopeRef } = refProps;
  const handleLearnMoreClick = () => {
    const targetPosition = projectScopeRef.current.offsetTop - 64;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Grid
        ref={heroSectionsRef}
        container
        sx={{
          // backgroundImage: `url(${bannerWelcome})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          background: "linear-gradient(to top right, #1e3a8a 0%, #1c1c1c 100%)",
          height: "calc(100vh - 90px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          padding: "2%",
        }}
      >
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" component="h1" sx={{
              fontWeight: 'bold',
              color: '#E0E0E0' // Example dark blue color
            }}>
              Welcome to Crime Guard
            </Typography>
            <Typography variant="h5" component="h2" sx={{ color: "#888" }}>
              Crime Guard is a GIS-powered tool that uses AI and data visualization to analyze and predict crime trends, 
              offering interactive maps and dashboards for deeper insights
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              onClick={handleLearnMoreClick}
              sx={{
                backgroundColor: '#d32f2f', // Example red color for crime theme
                color: '#fff', // White text color
                '&:hover': {
                  backgroundColor: '#b71c1c' // Darker shade for hover effect
                }
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          spacing={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box>
            <img
              alt="amLogo"
              src={pleaserateus}
              style={{ 
                width: "650px",
                height: "500px", 
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
