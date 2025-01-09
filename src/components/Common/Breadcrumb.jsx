import { routes } from "@/router/router";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="breadcrumbs text-white">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          <Link to={match.pathname} className={`${currentPath === match.pathname ? 'active' : ''} breadcrumb--item`}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
