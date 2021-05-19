import { Box, Typography } from "@material-ui/core";
import useStyles from "./topic.styles";

export interface TopicType {
  startDate: string | number | Date;
  endDate: string | number | Date;
  image?: string;
  title?: string;
  allDay?: boolean;
  assetPreviews?: number[];
}

interface Props {
  children: React.ReactNode;
  data: TopicType;
  onClick?: (e: any) => void;
}

export default function Topic({ data, onClick, children }: Props) {
  const classes = useStyles();

  const renderRecommendations = () =>
    data.assetPreviews?.map((r, i) => (
      <Box display="flex" alignItems="center" key={i} width={r} />
    ));

  return (
    <Box className={classes.container} onClick={onClick}>
      <img
        alt="scheduled-topic"
        className={classes.eventImage}
        src={data.image}
      />
      <Typography variant="body1" className={classes.title}>
        {data.title || ""}
      </Typography>

      <Typography variant="body2" className={classes.smartRecommendations}>
        Smart recommendations
      </Typography>
      <Box className={classes.recommendations}>{renderRecommendations()}</Box>
    </Box>
  );
}
