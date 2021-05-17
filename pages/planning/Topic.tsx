import { Topic as TopicType } from "./mockTopics";
import styles from "./topic.module.css";

interface Props {
  children: React.ReactNode;
  data: TopicType;
  onClick?: (e: any) => void;
}

export default function Topic({ data, onClick, children }: Props) {
  const renderRecommendations = () =>
    data.assetPreviews.map((r, i) => (
      <div key={i} className={styles.recommendation} style={{ width: r }} />
    ));

  return (
    <div className={styles.container} onClick={onClick}>
      <img className={styles.event_image} src={data.image} />
      <p className={styles.title}>{data.title || ""}</p>

      <p className={styles.smart_recommendations}>Smart recommendations</p>
      <div className={styles.recommendations}>{renderRecommendations()}</div>
    </div>
  );
}
