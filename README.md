# To-do list for The Odin Project

[Live Demo](https://paposeco.github.io/todolist/)

![to-Do](https://github.com/paposeco/todolist/assets/13892562/99a38e52-0592-4953-a176-472e23a5ebae)

Implementation of a todo list for the Odin Project using modules and local storage.

## Features

The user can create tasks on a Default list or create their own list/lists. Every list and task can be deleted; each task can also be edited. The lists/tasks are stored in localstorage.

### Tasks

Each task is created using a constructor that can save the following information:

- title (required);
- description;
- due date;
- priority;
- notes;
- a link;
- checklist of sub-tasks.

Task priority is selected between 1-5, where 5 is the highest priority and 1 is the default option. The priority is color coded from green (1) to red (5).

The checklist is displayed in a list of sub-tasks, where each sub-task can be marked as complete. The number of finished sub-tasks/total number of sub-tasks is also displayed.

Each task can be marked as complete by clicking the square next to "Not finished";

### Sorting and collapsing

Each project can be sorted by priority and due date; descending order of priority and ascending order of due date. Finished tasks are placed at the bottom of the project.

It's possible to collapse each task so that it only shows the title and description/due date if provided. There is also a button for each project to collapse/expand all tasks. A new task is always displayed expanded.

### Information

There is a section where the highest priority task and the closest due date task are displayed. Each time a task is added, deleted or edited, the section is updated if necessary. Tasks with a priority of 1 aren't displayed.

## Final thoughts

Fun project! I'm not sure I took full advantage of separating application logic between modules, even though I tried to keep that in mind.

I'm happy with the design. The page looks clean and works well on small screens too. I used icons from Line Awesome and went for a simple Arial font. This was my first time working with a library (data-fns) and I enjoyed it.
