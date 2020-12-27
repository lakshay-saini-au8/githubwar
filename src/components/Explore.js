import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { dataFetch } from "../api";
import ExploreList from "./ExploreList";
import Loader from "./Loader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setData(null);
        dataFetch("all").then((res) => setData(res));
        break;
      case 1:
        setData(null);
        dataFetch("javascript").then((res) => setData(res));
        break;
      case 2:
        setData(null);
        dataFetch("react").then((res) => setData(res));
        break;
      case 3:
        setData(null);
        dataFetch("vue").then((res) => setData(res));
        break;
      case 4:
        setData(null);
        dataFetch("python").then((res) => setData(res));
        break;
      case 5:
        setData(null);
        dataFetch("css").then((res) => setData(res));
        break;

      default:
        setData(null);
        dataFetch("all").then((res) => setData(res));
        break;
    }
  };
  useEffect(() => {
    dataFetch("all").then((res) => setData(res));
  }, [setData]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Javascript" {...a11yProps(1)} />
          <Tab label="React" {...a11yProps(2)} />
          <Tab label="Vue" {...a11yProps(3)} />
          <Tab label="Python" {...a11yProps(4)} />
          <Tab label="CSS" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      {[...Array(6).keys()].map((tabNumber) => (
        <TabPanel value={value} index={tabNumber} key={tabNumber}>
          {data === null ? (
            <Loader />
          ) : (
            <div>
              <ExploreList gitData={data} />{" "}
            </div>
          )}
        </TabPanel>
      ))}
    </div>
  );
}
