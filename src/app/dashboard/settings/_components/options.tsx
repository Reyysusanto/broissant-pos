import { ReactNode } from "react";

const Options = ({
  icon,
  name,
  description,
}: {
  icon: ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex items-start text-gray-300 p-6 gap-3">
        {icon}
      <div className="flex flex-col justify-start">
        <h3 className="text-sm">{name}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Options;
