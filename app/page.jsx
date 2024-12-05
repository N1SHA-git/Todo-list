"use client";

import { AddTaskForm } from "./ui/add-task";
import { AddTaskButton } from "./ui/add-task-button";
import { CheckMark } from "./ui/check-mark";
import { Filter } from "./ui/filter";
import { Trash } from "./ui/icons/trash";
import { Task } from "./ui/task";
import { TaskActions } from "./ui/task-actions";
import { TodoLayout } from "./ui/todo-layout";
import { useTodoState } from "./use-todo-state";
import { getFilteredTasks } from "@/app/model/getFilteredTasks";

export default function HomePage() {
  const {
    inputValue,
    tasks,
    handleInputChange,
    handleDelete,
    handleRadioChange,
    handleSubmit,
    toggleSelect,
    selectOption,
    selectedOption,
    isOpen,
  } = useTodoState();

  const filteredTasks = getFilteredTasks(tasks, selectedOption);

  return (
    <>
      <TodoLayout
        addTask={
          <AddTaskForm
            onChange={handleInputChange}
            value={inputValue}
            onSubmit={handleSubmit}
          />
        }
        tasksList={filteredTasks.map((task, index) => (
          <li key={index}>
            <Task
              taskActions={
                <TaskActions
                  trash={<Trash onClick={() => handleDelete(index)} />}
                  checkMark={
                    <CheckMark
                      onChange={() => handleRadioChange(index)}
                      selected={task.selected}
                    />
                  }
                />
              }
            >
              {task.name}
            </Task>
          </li>
        ))}
        addTaskButton={<AddTaskButton />}
        filter={
          <Filter
            isOpen={isOpen}
            selectOption={selectOption}
            selectedOption={selectedOption}
            toggleSelect={toggleSelect}
          />
        }
      />
    </>
  );
}
