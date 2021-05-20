import { useState, useRef } from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  TodayButton,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

import TopicForm from "./TopicForm";
import Topic, { TopicType } from "./Topic";
import DateNavigator from "./DateNavigator";

interface MonthViewCellProps extends MonthView.TimeTableCellProps {
  data: TopicType[];
  onDoubleClick: (e: any) => void;
}

const MonthViewCell = ({
  data,
  startDate,
  onDoubleClick,
  ...restProps
}: MonthViewCellProps) => {
  return (
    <MonthView.TimeTableCell
      {...restProps}
      startDate={startDate}
      onDoubleClick={onDoubleClick}
      style={{ height: 200 }}
    />
  );
};

export default function Planning({ data }: { data: TopicType[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formVisible, setFormVisible] = useState(false);
  const [formPosition, setFormPosition] =
    useState<{ x: number; y: number } | null>(null);

  return (
    <div>
      <Scheduler data={data}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={(d) => setCurrentDate(d)}
        />
        <MonthView
          timeTableCellComponent={(props) => (
            <MonthViewCell
              {...props}
              data={data}
              onDoubleClick={(e) => {
                // Get absolute position and dimentions of clicked element
                const { left, top } = e.target.getBoundingClientRect();
                setFormVisible(true);
                setFormPosition({ x: left, y: top });
              }}
            />
          )}
        />

        <Toolbar />
        <DateNavigator date={currentDate} />
        <TodayButton />

        <Appointments appointmentComponent={Topic} />
        <TopicForm />

        <AppointmentForm
          visible={formVisible}
          onVisibilityChange={(visible) => setFormVisible(visible)}
          overlayComponent={(props) => {
            return (
              props.visible &&
              formPosition && (
                <div
                  onClick={props.onHide}
                  style={{
                    width: 200,
                    height: 400,
                    backgroundColor: "red",
                    position: "absolute",
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    transform: `translate(${formPosition.x}px, ${formPosition.y}px)`,
                  }}
                />
              )
            );
          }}
        />
      </Scheduler>
    </div>
  );
}
