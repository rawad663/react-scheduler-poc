import { useState } from "react";
import moment from "moment";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  TodayButton,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import TopicForm from "../../components/TopicForm";

import Topic from "./Topic";
import { topics } from "./mockTopics";
import DateNavigator from "./DateNavigator";

const MonthViewCell = (props: MonthView.TimeTableCellProps) => {
  const date = moment(props.startDate);

  const count = topics.filter((t) => {
    return (
      date.isBetween(moment(t.startDate), moment(t.endDate)) ||
      date.isSame(moment(t.startDate))
    );
  }).length;

  return (
    <MonthView.TimeTableCell
      {...props}
      onDoubleClick={() => console.log("clicked")}
      style={{ height: 150 + count * 175 }}
    />
  );
};

export default function Planning() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Scheduler data={topics}>
        <ViewState
          currentDate={currentDate.toDate()}
          onCurrentDateChange={(d) => setCurrentDate(moment(d))}
        />
        <MonthView timeTableCellComponent={MonthViewCell} />

        <Toolbar />
        <DateNavigator date={currentDate} />
        <TodayButton />

        <Appointments appointmentComponent={Topic} />
        <TopicForm />

        <AppointmentForm />
      </Scheduler>
    </div>
  );
}
