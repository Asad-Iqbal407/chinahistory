import { AdminSidebar } from "@/components/admin-sidebar";
import { getAdminSession } from "@/lib/admin-auth";

import styles from "./layout.module.css";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className={styles.adminWrapper}>
      <AdminSidebar />
      <div className={styles.contentWrapper}>
        <header className={styles.topBar}>
          <div className={styles.userInfo}>
            <span className={styles.avatar}>AD</span>
            <div className={styles.userText}>
              <span className={styles.userName}>{session.email}</span>
              <span className={styles.userRole}>Administrator</span>
            </div>
          </div>
          <div className={styles.topActions}>
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>Systems Online</span>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
