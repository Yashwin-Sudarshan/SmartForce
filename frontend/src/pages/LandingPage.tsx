import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Partners from "../data/Partners";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../styles/pages-styles/LandingPage.css";

const LandingPage = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1200px)");
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <div className="main-header-section-background">
          <div className="main-header-section">
            <div className="main-header-section-content">
              <h1>
                Streamline and Simplify HR Processes with Our All-in-One HR
                Management Solution
              </h1>
              <h2>Save Time, Stay Organized, and Ensure Compliance.</h2>
              <Button
                sx={{
                  border: "2px solid #005F85",
                  backgroundColor: "#005F85",
                  color: "white",
                  height: isMobileScreen ? "50px" : "75px",
                  width: isMobileScreen ? "45%" : "25%",
                  marginLeft: isMobileScreen ? "auto" : "60px",
                  marginRight: isMobileScreen ? "auto" : "0px",
                  marginTop: "20px",
                  fontSize: isMobileScreen ? "18px" : "22px",
                  ":hover": {
                    backgroundColor: "#014967",
                  },
                }}
              >
                Sign up
              </Button>
            </div>
            <img
              className="main-header-section-img"
              src="/assets/GeneralHR.svg"
            />
          </div>
        </div>
        <div className="trusted-by-label-section">
          <p>Trusted by leading organisations</p>
        </div>
        <div className="organisations-list-section">
          <div className="marquee">
            <ul>
              {Partners.map((partner) => (
                <li key={partner}>
                  <p>{partner}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <section>
        <div className="overview">
          <h1>Everything your HR team needs</h1>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#0046A4",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "left", padding: "25px" }}>
                  <h3 style={{ fontWeight: "normal", fontSize: "20px" }}>
                    ONBOARDING
                  </h3>
                  <h2 style={{ fontSize: "36px" }}>
                    Streamline the employee onboarding process
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Create and add relevant documents, collect employee
                    information, and track employee progress.
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      paddingLeft: "15px",
                      ":hover": {
                        backgroundColor: "#0046A4",
                        color: "gray",
                      },
                    }}
                    disableRipple
                  >
                    Learn more &#8594;
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#0046A4",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "left", padding: "25px" }}>
                  <h3 style={{ fontWeight: "normal", fontSize: "20px" }}>
                    OFFBOARDING
                  </h3>
                  <h2 style={{ fontSize: "36px" }}>
                    Efficiently transition departing employees
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Easily organise action items, account deletion, and
                    collection of legal documentation.
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      paddingLeft: "15px",
                      ":hover": {
                        backgroundColor: "#0046A4",
                        color: "gray",
                      },
                    }}
                    disableRipple
                  >
                    Learn more &#8594;
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#0046A4",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "left", padding: "25px" }}>
                  <h3 style={{ fontWeight: "normal", fontSize: "20px" }}>
                    ROSTERING
                  </h3>
                  <h2 style={{ fontSize: "36px" }}>
                    Swiftly manage and approve timesheets
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Quickly assign or modify employee working schedules, approve
                    timesheets and leave requests.
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      paddingLeft: "15px",
                      ":hover": {
                        backgroundColor: "#0046A4",
                        color: "gray",
                      },
                    }}
                    disableRipple
                  >
                    Learn more &#8594;
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#0046A4",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "left", padding: "25px" }}>
                  <h3 style={{ fontWeight: "normal", fontSize: "20px" }}>
                    PAYROLL
                  </h3>
                  <h2 style={{ fontSize: "36px" }}>
                    Easily organise employee payments
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Save time with flexible payroll management, and
                    automatically calculate benefits, pay, and taxes for STP
                    reporting.
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      paddingLeft: "15px",
                      ":hover": {
                        backgroundColor: "#0046A4",
                        color: "gray",
                      },
                    }}
                    disableRipple
                  >
                    Learn more &#8594;
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#0046A4",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "left", padding: "25px" }}>
                  <h3 style={{ fontWeight: "normal", fontSize: "20px" }}>
                    JOB ADVERTS
                  </h3>
                  <h2 style={{ fontSize: "36px" }}>
                    Create job ads and find the perfect candidate
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Efficiently create and manage thorough job advertisements,
                    track candidate applications, and record candidate
                    suitability through rounds.
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      paddingLeft: "15px",
                      ":hover": {
                        backgroundColor: "#0046A4",
                        color: "gray",
                      },
                    }}
                    disableRipple
                  >
                    Learn more &#8594;
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
      <section>
        <Grid container spacing={12} textAlign={"left"} paddingTop={"80px"}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1
              style={{
                fontSize: "36px",
                width: "95%",
                paddingLeft: "20px",
              }}
            >
              Employee self-service functionality ensures workers have access to
              their own data
            </h1>
            <ul style={{ fontSize: "28px", listStylePosition: "inside" }}>
              <li style={{ paddingBottom: "40px" }}>
                Submit timesheets and leave requests.
              </li>
              <li style={{ paddingBottom: "40px" }}>
                Edit personal information, banking details, super etc.
              </li>
              <li style={{ paddingBottom: "40px" }}>
                View payslips and pay summaries.
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            container
            justifyContent="flex-start"
          >
            <img
              src="/assets/EmployeeSelfService.svg"
              style={{ maxWidth: "100%", height: "auto", width: "700px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            container
            justifyContent="flex-end"
          >
            <img
              src="/assets/DashboardAnalytics.svg"
              style={{ maxWidth: "100%", height: "auto", width: "700px" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1
              style={{
                fontSize: "36px",
                width: "95%",
              }}
            >
              Dashboard analytics provides thorough and valuable employee and
              hiring metrics at a glance
            </h1>
            <ul style={{ fontSize: "28px" }}>
              <li style={{ paddingBottom: "40px" }}>
                Inform managers on what works and what doesn't.
              </li>
              <li style={{ paddingBottom: "40px" }}>
                Quickly view important metrics related to cost expenditure,
                hiring efficiency, sentiment analysis etc.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1
              style={{
                fontSize: "36px",
                width: "95%",
                paddingLeft: "20px",
              }}
            >
              Customise permissions access to members of your team
            </h1>
            <ul style={{ fontSize: "28px", listStylePosition: "inside" }}>
              <li style={{ paddingBottom: "40px" }}>
                Set access to certain system components such as payroll,
                timesheeting etc.
              </li>
              <li style={{ paddingBottom: "40px" }}>
                Minimise the risk of adverse modifications to data.
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            container
            justifyContent="flex-start"
          >
            <img
              src="/assets/CustomisePermissions.svg"
              style={{ maxWidth: "100%", height: "auto", width: "700px" }}
            />
          </Grid>
        </Grid>
      </section>
      <section>
        <div className="client-review-section">
          <div className="client-review-info">
            <h1>Client reviews</h1>
            <p>
              Use our cloud-native platform to automate and organise the entire
              HR management process.
            </p>
            <Button
              sx={{
                border: "2px solid #005F85",
                backgroundColor: "#005F85",
                color: "white",
                height: isMobileScreen ? "50px" : "75px",
                width: isMobileScreen ? "250px" : "300px",
                fontSize: isMobileScreen ? "18px" : "22px",
                marginTop: "40px",
                ":hover": {
                  backgroundColor: "#014967",
                },
              }}
            >
              Sign up
            </Button>
          </div>
          <div className="example-review">
            <h2>
              "SmartForce was comprehensive enough to handle all our HR
              department needs, while being simple enough to use."
            </h2>
            <h3>HELION</h3>
            <p>ICT Operations Manager</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
