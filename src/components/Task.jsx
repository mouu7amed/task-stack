import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Task = ({
  task,
  tasks,
  setTasks,
  index,
  stacks,
  filteredTasks,
  name,
}) => {
  const handleRight = () => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, stack: stacks[index + 1] } : item
      )
    );
  };

  const handleLeft = () => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, stack: stacks[index - 1] } : item
      )
    );
  };

  const handleUp = () => {
    const currentStack = stacks.find((stack) => stack === name);
    const currentTasks = tasks.filter((item) => item.stack === currentStack);
    const remainingTasks = tasks.filter(
      (task) => task.stack !== currentTasks.map((item) => item.stack)[0]
    );

    const temp = [...currentTasks];

    if (currentTasks.length - 1 !== 0) {
      [temp[1], temp[0]] = [temp[0], temp[1]];
    }

    for (var key in remainingTasks) {
      var value = remainingTasks[key];
      temp.push(value);
    }
    setTasks(temp);
  };

  const handleDown = () => {
    const currentStack = stacks.find((stack) => stack === name);
    const currentTasks = tasks.filter((item) => item.stack === currentStack);
    const remainingTasks = tasks.filter(
      (task) => task.stack !== currentTasks.map((item) => item.stack)[0]
    );

    const temp = [...currentTasks];

    if (currentTasks.length - 1 !== 0) {
      [temp[0], temp[1]] = [temp[1], temp[0]];
    }

    for (var key in remainingTasks) {
      var value = remainingTasks[key];
      temp.push(value);
    }
    setTasks(temp);
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Stack color="white" fontWeight="600">
        Task {task.name}
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <Box sx={{ width: "fit-content" }}>
          <IconButton onClick={handleUp}>
            <ArrowUpwardIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton disabled={index === 0} onClick={handleLeft}>
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            disabled={index === stacks.length - 1}
            onClick={handleRight}
          >
            <ArrowForwardIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={handleDown}>
            <ArrowDownwardIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};
