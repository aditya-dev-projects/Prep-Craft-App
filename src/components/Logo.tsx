import { useTheme } from "@/components/ThemeProvider";
import LogoDark from "/Logo-DarkTheme.svg";
import LogoLight from "/Logo-LightTheme.svg";

const Logo = () => {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <img
      src={isDark ? LogoDark : LogoLight}
      alt="PREPCRAFT logo"
      className="h-8 w-auto"
    />
  );
};

export default Logo;