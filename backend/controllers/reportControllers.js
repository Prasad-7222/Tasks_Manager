// const Task = require("../models/Task");
// const User = require("../models/User");
// const excelJS = require("exceljs");

// //@desc export all tasks as an  excel file
// //@route GET/api/reports/exports/tasks
// //@access Private(admin)
// const exportsTasksReport = async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("assignedTo", "name email");
//     console.log(tasks);

//     const workbook = new excelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Task Report");

//     worksheet.columns = [
//       { header: "Task ID", key: "_id", width: 25 },
//       { header: "Title", key: "title", width: 30 },
//       { header: "Description", key: "description", width: 50 },
//       { header: "Priority", key: "priority", width: 15 },
//       { header: "Status", key: "status", width: 20 },
//       { header: "Due Date", key: "dueDate", width: 20 },
//       { header: "Assigned To", key: "assignedTo", width: 30 },
//     ];

//     tasks.forEach((task) => {
//       const assignedTo = task.assignedTo
//         .map((user) => `${user.email}(${user.email})`)
//         .join(", ");
//       worksheet.addRow({
//         _id: task._id,
//         title: task.title,
//         description: task.description,
//         priority: task.priority,
//         status: task.status,
//         dueDate: dueDate.toISOString().split("T")[0],
//         assignedTo: assignedTo || "Unassigned",
//       });
//     });

//     res.setHeader("Content-Type", 'attachment;filename="task_report.xlsx"');
//     return workbook.xlsx.write(res).then(() => {
//       res.end();
//     });
//   } catch (error) {
//     console.log("Task", error);
//     res
//       .status(500)
//       .json({ message: "Error exporting tasks", error: error.message });
//   }
// };
// //@desc export user-tasks as an  excel file
// //@route GET/api/reports/exports/users
// //@access Private(admin)
// const exportsUserReport = async (req, res) => {
//   try {
//     const users = await User.find().select("name email _id").lean();
//     const userTasks = await Task.find().populate(
//       "assignedTo",
//       "name email _id"
//     );
//     const userTaskMap = {};
//     users.forEach((user) => {
//       userTaskMap[user._id] = {
//         name: user.name,
//         email: user.email,
//         taskCount: 0,
//         pendingTasks: 0,
//         inProgressTasks: 0,
//         completedTasks: 0,
//       };
//     });
//     userTasks.forEach((task) => {
//       if (task.assignedTo) {
//         task.assignedTo.forEach((assignedUser) => {
//           if (userTaskMap[assignedUser._id]) {
//             userTaskMap[assignedUser._id].taskCount += 1;
//             if (task.status === "Pending") {
//               userTaskMap[(assignedUser, _id)].pendingTasks += 1;
//             } else if (task.status === "In progress") {
//               userTaskMap[assignedUser._id].inProgressTasks += 1;
//             } else if (task.status === "Completed") {
//               userTaskMap[(assignedUser, _id)].completedTasks += 1;
//             }
//           }
//         });
//       }
//     });

//     const workbook = new excelJS.Workbook();
//     const worksheet = workbook.addWorksheet("User Task Report");

//     worksheet.columns = [
//       { header: "User Name", key: "name", width: 30 },
//       { header: "Email", key: "email", width: 40 },
//       { header: "Total Assigned Tasks", key: "taskCount", width: 20 },
//       { header: "Pending Tasks", key: "pendingTasks", width: 20 },
//       { header: "In Progress Tasks", key: "inProgressTasks", width: 20 },
//       { header: "Completed Tasks", key: "completedTasks", width: 20 },
//     ];

//     Object.values(userTaskMap).forEach((user) => {
//       worksheet.addRow(user);
//     });

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocuments.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       'attachment;filename="users_reports.xlsx"'
//     );

//     return workbook.xlsx.write(res).then(() => {
//       res.end();
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error exporting tasks", error: error.message });
//   }
// };

// module.exports = {
//   exportsTasksReport,
//   exportsUserReport,
// };

const Task = require("../models/Task");
const User = require("../models/User");
const excelJS = require("exceljs");

//@desc export all tasks as an excel file
//@route GET /api/reports/exports/tasks
//@access Private (admin)
const exportsTasksReport = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "name email");

    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("Task Report");

    worksheet.columns = [
      { header: "Task ID", key: "_id", width: 25 },
      { header: "Title", key: "title", width: 30 },
      { header: "Description", key: "description", width: 50 },
      { header: "Priority", key: "priority", width: 15 },
      { header: "Status", key: "status", width: 20 },
      { header: "Due Date", key: "dueDate", width: 20 },
      { header: "Assigned To", key: "assignedTo", width: 40 },
    ];

    tasks.forEach((task) => {
      const assignedTo = Array.isArray(task.assignedTo)
        ? task.assignedTo
            .map((user) => `${user.name} (${user.email})`)
            .join(", ")
        : "Unassigned";

      worksheet.addRow({
        _id: task._id.toString(),
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate
          ? new Date(task.dueDate).toISOString().split("T")[0]
          : "",
        assignedTo,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="task_report.xlsx"'
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.log("Error exporting task report:", error);
    res
      .status(500)
      .json({ message: "Error exporting tasks", error: error.message });
  }
};

//@desc export user-task report as an excel file
//@route GET /api/reports/exports/users
//@access Private (admin)
const exportsUserReport = async (req, res) => {
  try {
    const users = await User.find().select("name email _id").lean();
    const userTasks = await Task.find().populate(
      "assignedTo",
      "name email _id"
    );

    const userTaskMap = {};

    users.forEach((user) => {
      userTaskMap[user._id] = {
        name: user.name,
        email: user.email,
        taskCount: 0,
        pendingTasks: 0,
        inProgressTasks: 0,
        completedTasks: 0,
      };
    });

    userTasks.forEach((task) => {
      if (Array.isArray(task.assignedTo)) {
        task.assignedTo.forEach((assignedUser) => {
          const userEntry = userTaskMap[assignedUser._id];
          if (userEntry) {
            userEntry.taskCount += 1;
            if (task.status === "Pending") userEntry.pendingTasks += 1;
            else if (task.status === "In progress")
              userEntry.inProgressTasks += 1;
            else if (task.status === "Completed") userEntry.completedTasks += 1;
          }
        });
      }
    });

    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("User Task Report");

    worksheet.columns = [
      { header: "User Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 40 },
      { header: "Total Assigned Tasks", key: "taskCount", width: 20 },
      { header: "Pending Tasks", key: "pendingTasks", width: 20 },
      { header: "In Progress Tasks", key: "inProgressTasks", width: 20 },
      { header: "Completed Tasks", key: "completedTasks", width: 20 },
    ];

    Object.values(userTaskMap).forEach((user) => {
      worksheet.addRow(user);
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="users_reports.xlsx"'
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.log("Error exporting user report:", error);
    res
      .status(500)
      .json({ message: "Error exporting user report", error: error.message });
  }
};

module.exports = {
  exportsTasksReport,
  exportsUserReport,
};
