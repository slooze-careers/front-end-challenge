"use client";

import { useAuth, Role } from "@/contexts/AuthContext";

interface RequireRoleProps {
  allowedRoles: Role[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RequireRole({ allowedRoles, children, fallback = null }: RequireRoleProps) {
  const { role, isLoading } = useAuth();

  if (isLoading) return null;

  if (role && allowedRoles.includes(role)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
