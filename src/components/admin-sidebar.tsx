import Link from "next/link";
import { AdminLogoutButton } from "./admin-logout-button";
import styles from "./admin-sidebar.module.css";

export function AdminSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.logo}>China Atlas</span>
        <span className={styles.badge}>Admin</span>
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.group}>
          <p className={styles.groupLabel}>Overview</p>
          <Link href="/admin" className={styles.navLink}>
            <span className={styles.icon}>📊</span> Dashboard
          </Link>
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel}>Content Management</p>
          <Link href="/admin/articles" className={styles.navLink}>
            <span className={styles.icon}>📚</span> All Articles
          </Link>
          <Link href="/admin/articles/new" className={styles.navLink}>
            <span className={styles.icon}>✍️</span> New Article
          </Link>
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel}>External</p>
          <Link href="/articles" className={styles.navLink} target="_blank">
            <span className={styles.icon}>🌐</span> View Public Site
          </Link>
          <Link href="/feedback" className={styles.navLink} target="_blank">
            <span className={styles.icon}>💬</span> Public Feedback
          </Link>
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel}>Account</p>
          <AdminLogoutButton className={styles.logoutButton} />
        </div>
      </nav>

      <div className={styles.footer}>
        <p>© 2026 China Atlas</p>
      </div>
    </aside>
  );
}
