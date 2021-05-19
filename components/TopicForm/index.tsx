import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { AppointmentModel } from "@devexpress/dx-react-scheduler";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface ContentProps {
  appointmentData?: AppointmentModel;
}

const useStyles = makeStyles({
  contentContainer: {
    padding: 12,
  },
});

function Header({ appointmentData, ...rest }: AppointmentTooltip.HeaderProps) {
  return (
    <AppointmentTooltip.Header {...rest} appointmentData={appointmentData} />
  );
}

function Content({
  appointmentData,
  ...rest
}: AppointmentTooltip.ContentProps) {
  const classes = useStyles();

  return (
    <Grid className={classes.contentContainer} container alignItems="center">
      <Grid item xs={12}>
        <TextField
          name="name"
          placeholder="Title"
          label="Title"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
    </Grid>
  );
}

export default function TopicForm() {
  return (
    <AppointmentTooltip
      showCloseButton
      headerComponent={Header}
      contentComponent={Content}
    />
  );
}
