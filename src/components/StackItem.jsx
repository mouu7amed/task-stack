import { Stack, Typography } from "@mui/material";
import React from "react";
import { Task } from "./Task";

export const StackItem = ({
  name,
  filteredTasks,
  tasks,
  setTasks,
  index,
  stacks,
}) => {
  return (
    <Stack spacing={1} p={1} alignItems="center">
      <Typography
        color="primary.main"
        fontWeight="bold"
        fontSize={{ xs: "1rem", md: "1.2rem" }}
      >
        {name}
      </Typography>
      <Stack
        width={"200px"}
        height={"80vh"}
        spacing={2}
        p={1}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#eee",
        }}
      >
        {filteredTasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              index={index}
              stacks={stacks}
              filteredTasks={filteredTasks}
              name={name}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
