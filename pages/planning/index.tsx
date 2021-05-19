import Scheduler from "components/Scheduler";
import { topics } from "./mockTopics";

export default function Planning() {
  return <Scheduler data={topics} />;
}
