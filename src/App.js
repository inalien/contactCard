import React from "react";
import "./styles.scss";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import Card from "@material-ui/core/Card";

const contacts = [
  {
    name: "jhon@inalien.com",
    image: "https://img.icons8.com/ios-glyphs/30/000000/email.png",
    arialabel: "Email Jhon",
    href: "mailto:jhon@inalien.com"
  },
  {
    name: "github.com/inalien",
    image: "https://img.icons8.com/material-sharp/24/000000/github.png",
    arialabel: "View Jhon on GitHub",
    href: "https://github.com/inalien"
  },
  {
    name: "linkedin.com/in/jhon-inalien-dev/",
    image: "https://img.icons8.com/ios-glyphs/30/000000/linkedin-2.png",
    arialabel: "Jhon on Linkedin",
    href: "https://www.linkedin.com/in/jhon-inalien-dev/"
  }
];

export default function App() {
  return (
    <div>
      <section id="contact">
        <Typography
          variant="h2"
          className="section-head content"
          style={{ padding: "50px" }}
        >
          Contact Card
        </Typography>
        <div className="content">
          <Grid container spacing={3}>
            <Card raised justify="center" className="contact-card">
              <Grid container spacing={3}>
                <Grid item xs={8} className="verticalcentercontent">
                  <div className="">
                    <Typography className="contact-name">
                      Jhon Inalien
                    </Typography>
                    <Typography className="contact-title">
                      Web Developer
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="">
                    <Avatar
                      alt="Jhon Inalien"
                      src="https://img.icons8.com/bubbles/100/000000/man-with-orange-tie.png"
                      className="avatarlarge"
                      href="#about"
                      padding="1em"
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div className="">
                    <div className="verticalcenter">
                      {contacts.map((contact, index, image) => (
                        <div>
                          <div>
                            <Grid container spacing={1}>
                              <Grid
                                item
                                xs={2}
                                // sm={2}
                                className=" verticalcentercontentxx"
                                style={{ padding: "10px" }}
                              >
                                <Avatar
                                  alt={contact.arialabel}
                                  src={contact.image}
                                  href={contact.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="contact-icon"
                                />
                              </Grid>
                              <Grid
                                item
                                xs={10}
                                sm={10}
                                className=" verticalcentercontent"
                              >
                                <Typography>
                                  <a
                                    aria-label={contact.arialabel}
                                    className="contact-source "
                                    href={contact.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {contact.name}
                                  </a>
                                </Typography>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </div>
      </section>
    </div>
  );
}
