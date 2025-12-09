import { useModeAnimation } from "react-theme-switch-animation";

const ThemeSwitching = () => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  return (
    <button ref={ref} onClick={toggleSwitchTheme}>
      Toggle Dark Mode (Currently {isDarkMode ? "Dark" : "Light"} Mode)
    </button>
  );
};

export default ThemeSwitching;
