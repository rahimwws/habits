import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const UsersIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 29 28" fill="none">
      <Path
        d="M20.3333 23.3333C20.3333 21.4003 17.7217 19.8333 14.5 19.8333C11.2783 19.8333 8.66667 21.4003 8.66667 23.3333M25 19.8337C25 18.3985 23.5602 17.165 21.5 16.6249M4 19.8337C4 18.3985 5.43978 17.165 7.5 16.6249M21.5 11.942C22.216 11.3012 22.6667 10.3698 22.6667 9.33325C22.6667 7.40026 21.0997 5.83325 19.1667 5.83325C18.2703 5.83325 17.4525 6.17025 16.8333 6.72446M7.5 11.942C6.78396 11.3012 6.33333 10.3698 6.33333 9.33325C6.33333 7.40026 7.90034 5.83325 9.83333 5.83325C10.7297 5.83325 11.5475 6.17025 12.1667 6.72446M14.5 16.3333C12.567 16.3333 11 14.7662 11 12.8333C11 10.9003 12.567 9.33325 14.5 9.33325C16.433 9.33325 18 10.9003 18 12.8333C18 14.7662 16.433 16.3333 14.5 16.3333Z"
        stroke={color}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UsersIcon;
