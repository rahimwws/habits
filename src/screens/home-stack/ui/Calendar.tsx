import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { StackHeader } from "@/entities/header";
import { HabitChart, HabitStatistic } from "@/entities/statistics";
import { CalendarComponent } from "@/features/calendar";
import { ScrollView } from "react-native";
import { useHabitStore } from "@/entities/habit/lib/state/HabitStore";

const Calendar = () => {
  const { habits } = useHabitStore();
  return (
    <ScreenContent>
      <StackHeader title="Calendar" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CalendarComponent habits={habits} />
        <HabitStatistic habits={habits} />
        <HabitChart habits={habits} />
      </ScrollView>
    </ScreenContent>
  );
};

export default Calendar;
