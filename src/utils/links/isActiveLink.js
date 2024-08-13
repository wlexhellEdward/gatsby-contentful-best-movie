export const isActiveLink = (path: string) => {
    const currentPath = window.location.pathname;
    if (currentPath === path) {
      return true;
    }
    if (path.startsWith("/movie") && currentPath.startsWith("/movie")) {
      return true;
    }
    return false;
  };