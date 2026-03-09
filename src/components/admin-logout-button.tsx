"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type AdminLogoutButtonProps = {
  className?: string;
};

export function AdminLogoutButton({ className }: AdminLogoutButtonProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleClick = async () => {
    setPending(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } finally {
      router.push("/admin/login");
      router.refresh();
      setPending(false);
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className} disabled={pending}>
      {pending ? "Signing out..." : "Sign out"}
    </button>
  );
}
