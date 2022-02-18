import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
