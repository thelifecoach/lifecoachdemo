import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import InputLabel from "@material-ui/core/InputLabel";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
      <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
              <Card>
                  <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Make a Goal</h4>
                      <p className={classes.cardCategoryWhite}>We make your Goal come true</p>
                  </CardHeader>
                  <CardBody>

                      <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                              <CustomInput
                                  labelText="Name of Goal"
                                  id="first-name"
                                  formControlProps={{
                                      fullWidth: true
                                  }}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                              <CustomInput
                                  labelText="Category"
                                  id="last-name"
                                  formControlProps={{
                                      fullWidth: true
                                  }}
                              />
                          </GridItem>
                      </GridContainer>
                      <GridContainer>
                          <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                  labelText="Funds Required (HK$)"
                                  id="city"
                                  formControlProps={{
                                      fullWidth: true
                                  }}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                  labelText="Timespan (months)"
                                  id="country"
                                  formControlProps={{
                                      fullWidth: true
                                  }}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                              <CustomInput
                                  labelText="Priority (High/Medium/Low)"
                                  id="postal-code"
                                  formControlProps={{
                                      fullWidth: true
                                  }}
                              />
                          </GridItem>
                      </GridContainer>
                      <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <CustomInput
                                  labelText="A brief, inspiring description of the goal"
                                  id="about-me"
                                  formControlProps={{
                                      fullWidth: true
                                  }}
                                  inputProps={{
                                      multiline: true,
                                      rows: 5
                                  }}
                              />
                          </GridItem>
                      </GridContainer>
                  </CardBody>
                  <CardFooter>
                      <Button color="primary">Add Goal</Button>
                  </CardFooter>
              </Card>
          </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>All Goals</h4>
            <p className={classes.cardCategoryWhite}>
              A list of all completed or current goals
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
                          tableHead={["Goal", "Best Case Scenario", "Probability", "Base Case Scenario", "Probability", "Worst Case Scenario","Probability"]}
              tableData={[
                          ["", "", "", "", "", "", ""],
                          ["", "", "", "", "", "", ""],
                          ["", "", "", "", "", "", ""]

                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Financial Products Purchased
            </h4>
            <p className={classes.cardCategoryWhite}>
              Sponsored by HSBC
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name"]}
              tableData={[
                ["176875677", "High-volatility FX portfolio"],
                ["287587578", "US Treasuries"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
