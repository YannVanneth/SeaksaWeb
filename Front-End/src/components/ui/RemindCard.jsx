import { IoMdAlarm } from "react-icons/io";
const RemindLearning = ({
  className = "flex gap-2 p-4 bg-gray-50 dark:bg-primaryDark dark:border-[1px] dark:text-textDark rounded-xl my-6 ",
}) => {
  return (
    <div className={`${className}`}>
      {/* Alarm Icon */}
      <div>
        <IoMdAlarm size={32} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg dark:text-textDark">
            Remind Learning
          </p>
          <p className="text-sm">
            Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to reach their goals. Set time
            aside to learn and get reminders using your learning scheduler.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-black dark:text-textDark border-2 border-green-600 p-2 rounded-md text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300">
            Set Reminder
          </button>
          <button className=" dark:text-textDark font-bold text-sm text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemindLearning;
