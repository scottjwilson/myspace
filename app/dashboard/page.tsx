import { SignOutButton } from "@/components/buttons";
import styles from "./page.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
