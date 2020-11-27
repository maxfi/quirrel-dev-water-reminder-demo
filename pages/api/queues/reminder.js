import { Queue } from "@quirrel/next";

export default Queue(
  "queues/reminder",
  async (recipient) => {
    console.log(`Sending email to ${recipient}`)
  }
);
