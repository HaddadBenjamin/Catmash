import cn from "classnames";
import styles from "./index.module.css";
import cardStyles from "@/styles/card.module.css";
import { ICatRank } from "../../index.model";
import CardImage from "@/shared/components/CardImage";

interface Props extends ICatRank {
  index: number;
}
const RankCard = ({ index, url, voteCount, id }: Props) => (
  <>
    <div className={styles.level}>{index + 1}</div>
    <CardImage imagePath={url} name={id} />
    <p className={cardStyles.cardName}>{`Chat ${index + 1}`}</p>
    <div className={styles.score}>Score: {voteCount}</div>
  </>
);

export default RankCard;
