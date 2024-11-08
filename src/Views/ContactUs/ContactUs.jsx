import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
// import Prasanna from "../../assets/images/PrasanaSir.jpg";
// import Samadhi from "../../assets/images/SamadhiSir.jpg";
// import CSKSir from "../../assets/images/CSKSir.png";
// import Dhanuka from "../../assets/images/Dhanuka.png";
// import Hamza from "../../assets/images/Hamza.jpg";
// import Sithara from "../../assets/images/Sithara.png";
// import Uthpala from "../../assets/images/Uthpala.jpg";
// import MemberCard from "./Components/MemberCard";

const ContactUs = ({ refProps }) => {
    const { ContactUsRef } = refProps;

    return (
        <Box ref={ContactUsRef} sx={{ padding: "5%", minHeight: "calc(100vh - 64px)" }}>
            <Grid container spacing={4}>
                {/* Page Title */}
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Contact Us
                    </Typography>
                </Grid>

                {/* Meet Our Team Section */}
                

                {/* Team Members */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={Prasanna}
                            name="DR. PRASANNA SUMATHIPALA"
                            role="Supervisor"
                            position="Senior Lecturer"
                            linkedIn="https://www.linkedin.com"
                            email=""
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={Samadhi}
                            name="Mr. Samadhi Rathnayake"
                            role="Co-Supervisor"
                            position="Lecturer"
                            linkedIn="https://www.linkedin.com"
                            email=""
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={CSKSir}
                            name="Mr. C.S.K. Millawithanaarachchi"
                            role="External Supervisor"
                            position="Criminologist"
                            institution="Sri Lanka Police"
                            linkedIn="https://www.linkedin.com"
                            email=""
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={Dhanuka}
                            name="Dhanuka Dayawansa"
                            role="Group Leader"
                            position="Undergraduate"
                            Department="Data Science"
                            linkedIn="https://www.linkedin.com/in/"
                            email="it21039904@sliit.lk"
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={Hamza}
                            name="Hamza Nauzad"
                            role="Group Member"
                            position="Undergraduate"
                            Department="Data Science"
                            linkedIn="https://www.linkedin.com/in/"
                            email="it21047206@my.sliit.lk"
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={Sithara}
                            name="Sithara Kumarasingha"
                            role="Group Member"
                            position="Undergraduate"
                            Department="Software Engineering"
                            linkedIn="https://www.linkedin.com/in/"
                            email="it20151638@my.sliit.lk"
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        {/* <MemberCard
                            imageUrl={Uthpala}
                            name="Uthpala Aththanayaka"
                            role="Group Member"
                            position="Undergraduate"
                            Department="Software Engineering"
                            linkedIn="https://www.linkedin.com/in/"
                            email="it20259334@my.sliit.lk"
                        /> */}
                    </Grid>
                </Grid>

                {/* Contact Form Section */}
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        Get in Touch
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box component="form" noValidate autoComplete="off" sx={{ maxWidth: 600, mx: "auto" }}>
                        <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Your Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                            required
                        />
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;
