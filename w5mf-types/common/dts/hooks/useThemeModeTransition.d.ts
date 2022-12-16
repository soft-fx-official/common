declare type UseThemeModeTransitionProps = {
    isDarkTheme: boolean;
};
declare const useThemeModeTransition: ({ isDarkTheme }: UseThemeModeTransitionProps) => "dark" | "light";
export { useThemeModeTransition };
