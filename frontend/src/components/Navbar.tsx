import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import "../styles/components-styles/Navbar.css";

const Navbar = () => {
  const [togglePlatformDropdown, setTogglePlatformDropdown] = useState(false);
  const [toggleCompanyDropdown, setToggleCompanyDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav">
      {/* Desktop navigation */}
      <div className="desktop-nav">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <span className="logo">SmartForce</span>
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{
                color: "black",
                ":hover": {
                  color: "#005F85",
                  backgroundColor: "white",
                },
              }}
              disableRipple
              endIcon={<KeyboardArrowDownIcon />}
              fullWidth
              onClick={() => setTogglePlatformDropdown((prev) => !prev)}
            >
              Platform
            </Button>
            {togglePlatformDropdown && (
              <div className="platform-dropdown-menu">
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Onboarding
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Offboarding
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Rostering
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Payroll
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Job adverts
                </Link>
              </div>
            )}
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{
                color: "black",
                ":hover": {
                  color: "#005F85",
                  backgroundColor: "white",
                },
              }}
              disableRipple
              fullWidth
            >
              Pricing
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{
                color: "black",
                ":hover": {
                  color: "#005F85",
                  backgroundColor: "white",
                },
              }}
              disableRipple
              endIcon={<KeyboardArrowDownIcon />}
              fullWidth
              onClick={() => setToggleCompanyDropdown((prev) => !prev)}
            >
              Company
            </Button>
            {toggleCompanyDropdown && (
              <div className="company-dropdown-menu">
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  About
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Contact us
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Partners
                </Link>
              </div>
            )}
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{
                border: "2px solid #005F85",
                color: "black",
                ":hover": {
                  color: "white",
                  backgroundColor: "#014967",
                },
              }}
              fullWidth
            >
              Log in
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{
                border: "2px solid #005F85",
                backgroundColor: "#005F85",
                color: "white",
                ":hover": {
                  backgroundColor: "#014967",
                },
              }}
              fullWidth
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* Mobile navigation */}
      <div className="mobile-nav">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <span className="logo">SmartForce</span>
          </Grid>
          <Grid item xs={6} textAlign={"right"}>
            <Button
              sx={{ paddingTop: "0px" }}
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              <MenuIcon
                sx={{
                  color: "#005F85",
                }}
                fontSize="large"
              />
            </Button>
            {toggleMenu && (
              <div className="menu">
                <Button
                  sx={{
                    border: "2px solid #005F85",
                    color: "black",
                    width: "75%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "15px",
                    ":hover": {
                      color: "white",
                      backgroundColor: "#014967",
                    },
                  }}
                >
                  Log in
                </Button>
                <Button
                  sx={{
                    border: "2px solid #005F85",
                    backgroundColor: "#005F85",
                    color: "white",
                    width: "75%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "15px",
                    ":hover": {
                      backgroundColor: "#014967",
                    },
                  }}
                >
                  Sign up
                </Button>
                <h2>Platform</h2>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Onboarding
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Offboarding
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Rostering
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Payroll
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Job adverts
                </Link>

                <h2>Pricing</h2>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Pricing
                </Link>

                <h2>Company</h2>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  About
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Contact us
                </Link>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    paddingBottom: "15px",
                    ":hover": {
                      color: "#005F85",
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  Partners
                </Link>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </nav>
  );
};

export default Navbar;
