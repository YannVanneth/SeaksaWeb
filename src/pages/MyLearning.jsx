import { useState } from "react";
import { IoMdAlarm } from "react-icons/io";
import CartComponent from "../components/ui/CartComponent";

const CourseContent = ({ isRemind = true, value = 1 }) => {
  return (
    <div>
      {isRemind && <RemindLearning />}

      {value === 1 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
          {...Array(4)
            .fill()
            .map((_) => <CartComponent />)}
        </div>
      )}

      {value === 2 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
          {...Array(10)
            .fill()
            .map((_) => <CartComponent />)}
        </div>
      )}

      {value === 3 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
          {...Array(5)
            .fill()
            .map((_) => <CartComponent />)}
        </div>
      )}
    </div>
  );
};

const TabSection = ({ isRemind = true }) => {
  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full mt-8 ">
      <div className="flex">
        <button
          onClick={() => handleChange(1)}
          className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
            value === 1
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          role="tab"
          aria-selected={value === 1}
        >
          All Courses
        </button>
        <button
          onClick={() => handleChange(2)}
          className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
            value === 2
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          role="tab"
          aria-selected={value === 2}
        >
          Wishlist
        </button>
        <button
          onClick={() => handleChange(3)}
          className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
            value === 3
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          role="tab"
          aria-selected={value === 3}
        >
          Others
        </button>
      </div>
      <CourseContent isRemind={isRemind} value={value} />
    </div>
  );
};

const RemindLearning = ({
  className = "flex gap-2 p-4 bg-gray-50 rounded-xl my-4",
}) => {
  return (
    <div className={`${className}`}>
      {/* Alarm Icon */}
      <div>
        <IoMdAlarm size={32} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">Remind Learning</p>
          <p className="text-sm">
            Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to reach their goals. Set time
            aside to learn and get reminders using your learning scheduler.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-black border-2 border-green-600 p-2 rounded-md text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300">
            Set Reminder
          </button>
          <button className="font-bold text-sm text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

const MyLearningPage = () => (
  <div className="w-[75%] mx-auto my-10">
    <p className="font-bold xl:text-5xl text-4xl ">My Learning Page</p>
    <TabSection />
  </div>
);

export default MyLearningPage;
