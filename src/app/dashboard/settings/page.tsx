import { FiAlertCircle } from "react-icons/fi";
import {
  IoMdHeartEmpty,
  IoMdNotificationsOutline,
  IoMdRestaurant,
} from "react-icons/io";
import { MdLockOpen } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import Options from "./_components/options";

const dataSetting = [
  {
    icon: <IoMdHeartEmpty />,
    name: "Appearance",
    description: "Dark and Light mode, Font size",
  },
  {
    icon: <IoMdRestaurant />,
    name: "Your Restaurant",
    description: "Dark and Light mode, Font size",
  },
  {
    icon: <RiDiscountPercentLine />,
    name: "Products Management",
    description: "Manage your product, pricing, etc",
  },
  {
    icon: <IoMdNotificationsOutline />,
    name: "Notifications",
    description: "Customize your notifications",
  },
  {
    icon: <MdLockOpen />,
    name: "Security",
    description: "Configure Password, PIN, etc",
  },
  {
    icon: <FiAlertCircle />,
    name: "About Us",
    description: "Find out more about Posly",
  },
];

const SettingPage = () => {
  return (
    <main className="flex gap-6">
      <div className="bg-secondaryColor rounded-md">
        {dataSetting.map((set) => (
            <Options
                key={set.name}
                icon={set.icon}
                name={set.name}
                description={set.description}
            />
        ))}
        </div>
      <div></div>
    </main>
  );
};

export default SettingPage;
