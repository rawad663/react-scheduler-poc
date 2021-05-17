import moment, { Moment } from "moment";
import {
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Box, IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight, ArrowDropDown } from "@material-ui/icons";

function RootComponent(props: DateNavigator.RootProps & { date: Moment }) {
  return (
    <Box ml={4} display="flex" width="100%" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <p>{props.date.format("MMMM YYYY")}</p>
        <props.openButtonComponent
          onVisibilityToggle={props.onVisibilityToggle}
        />
      </Box>

      <Box display="flex" alignItems="center">
        <props.navigationButtonComponent
          type="back"
          onClick={() =>
            props.onNavigate("back", props.date.subtract(1, "month").toDate())
          }
        />
        <props.navigationButtonComponent
          type="forward"
          onClick={() =>
            props.onNavigate("back", props.date.add(1, "month").toDate())
          }
        />
      </Box>
    </Box>
  );
}

export default function Navigator({ date }: { date: Moment }) {
  return (
    <DateNavigator
      rootComponent={(props) => <RootComponent {...props} date={date} />}
      navigationButtonComponent={(props) => (
        <IconButton {...(props as any)}>
          {props.type === "back" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      )}
      openButtonComponent={({ onVisibilityToggle }) => (
        <IconButton onClick={onVisibilityToggle}>
          <ArrowDropDown />
        </IconButton>
      )}
    />
  );
}
