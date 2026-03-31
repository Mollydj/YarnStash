import { Card, Flex, Image, Typography } from "antd";
import { Heart } from "@boxicons/react/Heart";
import { DotsHorizontalRounded, Yarn, YarnBall } from "@boxicons/react";
import "./Card.css";

interface YarnCardProps {
  url: string;
  yarnName: string;
  brandName: string;
  color?: string;
  notes?: string;
  isFavorite?: boolean;
  loading: boolean;
}

const { Title, Paragraph } = Typography;

const textStyle = {
  textAlign: "left",
  margin: 0,
  fontWeight: 400,
  fontSize: 12,
};
const textStyle2 = {
  textAlign: "left",
  margin: 0,
  fontSize: 14,
};

const YarnCard: React.FC<YarnCardProps> = ({
  url,
  yarnName,
  brandName,
  color,
  notes,
  isFavorite,
  loading,
}) => (
  <Card
    loading={loading}
    title={
      <Flex align="center" justify="space-between">
        <Flex vertical>
          <Typography>
          <Paragraph style={textStyle2}>{yarnName}</Paragraph>
          <Paragraph style={textStyle}>{brandName}</Paragraph>
          
          </Typography>
        </Flex>

        <Flex gap={8} style={{ width: "fit-content" }}>
          <DotsHorizontalRounded pack="filled" size={16} />
          <Heart pack={isFavorite ? "filled" : "regular"} />
        </Flex>
      </Flex>
    }
    cover={
      loading ? (
        <YarnBall size="3xl" />
      ) : (
        <Image
          src={url}
          alt="yarn"
          height={200}
          preview={false}
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      )
    }
  >
    {color && <Paragraph>{color}</Paragraph>}
    {notes && (
      <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
        {notes}
      </Paragraph>
    )}
  </Card>
);

export default YarnCard;
