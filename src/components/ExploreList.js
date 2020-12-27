import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function ExploreList({ gitData, width }) {
  const classes = useStyles();
  const getGridListCols = () => {
    if (isWidthUp("xl", width)) {
      return 4;
    }

    if (isWidthUp("lg", width)) {
      return 4;
    }

    if (isWidthUp("md", width)) {
      return 3;
    }
    if (isWidthUp("sm", width)) {
      return 2;
    }
    return 1;
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} cols={getGridListCols()} spacing={15}>
        {gitData.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.owner.avatar_url} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <StarIcon style={{ marginRight: "5px" }} />{" "}
                  {tile.stargazers_count}
                </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.name}`}
                  className={classes.icon}
                >
                  <Link
                    href={tile.owner.html_url}
                    target={"_blank"}
                    style={{ color: "#fff", alignItems: "center" }}
                  >
                    <InfoIcon />
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withWidth()(ExploreList);
