import { useState, useEffect } from "react";

export function useTodoState() {
  const [{ inputValue, tasks, isOpen, selectedOption }, setTodoState] =
    useState(() => {
      const savedTasks = localStorage.getItem("taskList");
      const savedSelectedOption = localStorage.getItem("selectedOption")
      return {
        inputValue: "",
        tasks: savedTasks ? JSON.parse(savedTasks) : [],
        isOpen: false,
        selectedOption: savedSelectedOption ? JSON.parse(savedSelectedOption) : "ALL",
      };
    });

  const handleInputChange = (event) => {
    setTodoState((lastTodoState) => {
      return {
        ...lastTodoState,
        inputValue: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoState((lastTodoState) => {
      return {
        ...lastTodoState,
        tasks: [
          ...lastTodoState.tasks,
          { name: lastTodoState.inputValue, selected: false },
        ],
        inputValue: "",
      };
    });
  };

  const handleDelete = (index) => {
    setTodoState((lastTodoState) => {
      return {
        ...lastTodoState,
        tasks: lastTodoState.tasks.filter((_, i) => i !== index),
      };
    });
  };

  function handleRadioChange(index) {
    setTodoState((lastTodoState) => {
      const updatedTasks = lastTodoState.tasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            selected: !task.selected, // Переключаем состояние для конкретной задачи
          };
        }
        return task;
      });

      return {
        ...lastTodoState,
        tasks: updatedTasks,
      };
    });
  }

  function toggleSelect() {
    setTodoState((lastTodoState) => {
      return {
        ...lastTodoState,
        isOpen: !lastTodoState.isOpen,
      };
    });
  }

  function selectOption(option) {
    setTodoState((lastTodoState) => ({
      ...lastTodoState,
      selectedOption: option,
      isOpen: false, // Закрываем dropdown
    }));
  }

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
  }, [selectedOption]);

  return {
    inputValue,
    tasks,
    handleInputChange,
    handleDelete,
    handleRadioChange,
    handleSubmit,
    toggleSelect,
    selectOption,
    isOpen,
    selectedOption,
  };
}
