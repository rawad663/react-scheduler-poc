import { format, addMonths, subMonths } from "date-fns";
import { DateNavigator } from "@devexpress/dx-react-scheduler-material-ui";
import { Box, IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight, ArrowDropDown } from "@material-ui/icons";

function RootComponent({
  date,
  onVisibilityToggle,
  onNavigate,
  ...components
}: DateNavigator.RootProps & { date: Date }) {
  return (
    <Box ml={4} display="flex" width="100%" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <p>{format(date, "MMMM yyyy")}</p>
        <components.openButtonComponent
          onVisibilityToggle={onVisibilityToggle}
        />
      </Box>

      <Box display="flex" alignItems="center">
        <components.navigationButtonComponent
          type="back"
          onClick={() => onNavigate("back", subMonths(date, 1))}
        />
        <components.navigationButtonComponent
          type="forward"
          onClick={() => onNavigate("forward", addMonths(date, 1))}
        />
      </Box>
    </Box>
  );
}

export default function Navigator({ date }: { date: Date }) {
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
