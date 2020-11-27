import reminderQueue from "./queues/reminder";

// pages/api/setupReminder.js
export default async (req, res) => {
  const email = req.body;
  await reminderQueue.enqueue(email, {
    id: email,
    delay: "1m",
    repeat: {
      every: "1m",
      times: 1,
    },
  });
  res.status(200).end();
};
