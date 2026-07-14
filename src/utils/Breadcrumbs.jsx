import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = ()=> {
  const location = useLocation();
  let currentLocation = "";
  const crumbs = location.pathname.split("/")
    .filter( crumb => crumb !== "")
    .map( crumb => {
      currentLocation += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLocation}>{crumb}</Link>
        </div>
      )
    });

  return (<div className="crumbs-container">
    {crumbs}
  </div>)
}
