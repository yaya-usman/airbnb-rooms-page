import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import NetworkWifiOutlinedIcon from "@mui/icons-material/NetworkWifiOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

interface IOfferItem {
  id: number;
  icon: (JSX.Element | HTMLElement | any)[];
  title: string;
}

const style = {
  transform: `scale(1.6)`,
  marginRight: `1.5rem`,
};

const offerItem: IOfferItem[] = [
  {
    id: 1,
    icon: [
      <span>
        <CollectionsOutlinedIcon style={style} />
      </span>,
    ],
    title: "Mountain view",
  },
  {
    id: 2,
    icon: [
      <span>
        <WavesOutlinedIcon style={style} />
      </span>,
    ],
    title: "Lake access",
  },
  {
    id: 3,
    icon: [
      <span>
        <NetworkWifiOutlinedIcon style={style} />
      </span>,
    ],
    title: "Wifi",
  },
  {
    id: 4,
    icon: [
      <span>
        <PetsOutlinedIcon style={style} />
      </span>,
    ],
    title: "Pets allowed",
  },
  {
    id: 5,
    icon: [
      <span>
        <LocalLaundryServiceOutlinedIcon style={style} />
      </span>,
    ],
    title: "Dryer",
  },
  {
    id: 6,
    icon: [
      <span>
        <YardOutlinedIcon style={style} />
      </span>,
    ],
    title: "Garden view",
  },
  {
    id: 7,
    icon: [
      <span>
        <RestaurantOutlinedIcon style={style} />
      </span>,
    ],
    title: "Kitchen",
  },
  {
    id: 8,
    icon: [
      <span>
        <DirectionsCarFilledOutlinedIcon style={style} />
      </span>,
    ],
    title: "Free parking on premises",
  },
  {
    id: 9,
    icon: [
      <span>
        <TvOutlinedIcon style={style} />
      </span>,
    ],
    title: "TV",
  },
  {
    id: 10,
    icon: [
      <span>
        <UpcomingOutlinedIcon style={style} />
      </span>,
    ],
    title: "Carbon monoxide alarm",
  },
];

export { offerItem };
