import { Outlet, useOutletContext } from "react-router-dom";

const GetInvolved = () => {
  const {
    events: { nodes },
  } = useOutletContext();

  return (
    <div>
      <Outlet context={nodes} />
    </div>
  );
};

export default GetInvolved;
