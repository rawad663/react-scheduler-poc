import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: 150,
    padding: 8,
    marginRight: 24,
    backgroundColor: "rgb(243, 244, 245)",
  },
  eventImage: {
    width: 24,
    height: 24,
    objectFit: "cover",
    borderRadius: 24,
  },
  title: {
    marginTop: 8,
    height: 40,
    fontSize: 13,
    color: "rgba(12, 18, 28, 0.87)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineClamp: 2,
  },
  smartRecommendations: {
    margin: "0 0 6px 0",
    height: 17,
    color: "rgba(12, 18, 28, 0.6)",
    fontSize: 11,
    fontWeight: "normal",
    lineHeight: 17,
  },
  recommendations: {
    height: 24,
    backgroundColor: "darkgray",
    borderRadius: 8,
    marginRight: 4,
  },
});

export default useStyles;
