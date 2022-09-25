import { Stack } from "@mui/material";
import React, { useState } from "react";
import { StackItem } from "./StackItem";

export const Main = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "A", stack: "Requested" },
    { id: 2, name: "B", stack: "Requested" },
    { id: 3, name: "C", stack: "Todo" },
  ]);

  const stacks = ["Requested", "Todo", "In-Progress", "Done"];

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      {stacks.map((stack, i) => {
        const filteredTasks = tasks.filter((task) => task.stack === stack);
        return (
          <StackItem
            filteredTasks={filteredTasks}
            tasks={tasks}
            setTasks={setTasks}
            name={stack}
            key={i}
            index={i}
            stacks={stacks}
          />
        );
      })}
    </Stack>
  );
};
