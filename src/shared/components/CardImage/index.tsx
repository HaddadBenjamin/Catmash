import Image from "next/image";
import cardStyles from "@/styles/card.module.css";

interface Props {
  imagePath: string;
  name: string;
}

const CardImage = ({ imagePath, name }: Props) => (
  <Image
    className={cardStyles.cardImage}
    src={imagePath}
    alt={name}
    width={200}
    height={200}
    style={{ minHeight: "200px", width: "auto", objectFit: "cover" }}
  />
);

export default CardImage;
