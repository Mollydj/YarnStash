import { Card, Flex, Image } from "antd";
import { Heart } from "@boxicons/react/Heart";
import { DotsHorizontalRounded } from "@boxicons/react";

interface CardComponentProps {
  url: string;
  yarnName: string;
  brandName: string;
  color: string | undefined;
  notes: string | undefined;
  isFavorite?: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({
  url,
  yarnName,
  brandName,
  color,
  notes,
  isFavorite,
}) => {
  return (
    <Card
      title={
        <>
          <Flex align={"center"} justify="space-between">
            <div>
              <span>{brandName}</span> <span>{yarnName}</span>
            </div>
            <div>
              <DotsHorizontalRounded pack="filled" size={16} />
              {isFavorite ? <Heart pack="filled" /> : <Heart />}
            </div>
          </Flex>
        </>
      }
      size="small"
      cover={
        <Image
          alt="yarn"
          src={url}
          height={220}
          style={{ objectFit: "cover" }}
          preview={false}
        />
      }
    >
      {(color || notes) && <Card.Meta
        description={
          <>
            <Flex align={"center"} justify="space-between">
              {color && <span>{color}</span>}
            </Flex>
            {notes && (
              <span
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {notes}
              </span>
            )}
          </>
        }
      />}
    </Card>
  );
};

export default CardComponent;
