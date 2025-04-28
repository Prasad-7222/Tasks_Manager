import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useUserContext } from "../../context/userContext";

const DashBoardLayout = ({ children, activeMenu }) => {
  const { user } = useUserContext();
  return (
    <div>
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashBoardLayout;
