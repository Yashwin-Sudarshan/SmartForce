import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import "../styles/components-styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        spacing={2}
        paddingTop={"100px"}
        paddingBottom={"100px"}
        paddingLeft={"50px"}
        paddingRight={"50px"}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} textAlign={"center"}>
          <span className="logo">SmartForce</span>
          <p>&#169; Copyright 2023 SmartForce Melbourne CBD, VIC, 3030</p>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} textAlign={"center"}>
          <h2 style={{ fontSize: "32px" }}>Platform</h2>
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
            }}
          >
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Onboarding
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Offboarding
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Rostering
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Payroll
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Job adverts
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} textAlign={"center"}>
          <h2 style={{ fontSize: "32px" }}>Pricing</h2>
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
            }}
          >
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} textAlign={"center"}>
          <h2 style={{ fontSize: "32px" }}>Company</h2>
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
            }}
          >
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                About
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Careers
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Partners
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} textAlign={"center"}>
          <h2 style={{ fontSize: "32px" }}>Trust center</h2>
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
            }}
          >
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Privacy policy
              </Link>
            </li>
            <li style={{ fontSize: "24px", marginBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  ":hover": {
                    color: "#005F85",
                    transitionDelay: "100ms",
                  },
                }}
              >
                Terms & conditions
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
