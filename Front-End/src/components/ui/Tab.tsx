import React,{ ReactNode, useState } from "react";
import RemindLearning from "./RemindCard";


type TabProps = {
  id: number;
  label: string;
  children: ReactNode;
  className?: string;
};

type TabsProps = {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  isRemind?: boolean;
  className?: string;
};

// Updated Tab Component to accept className
const Tab = ({ children, className }: TabProps) => {
  return <div className={className}>{children}</div>;
};

const Tabs = ({ children, isRemind = false, className }: TabsProps) => {
    const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];  

  const [activeTab, setActiveTab] = useState(tabs[0]?.props.id || 1);

  return (
    <div className={`${className ?? "w-full"} `}>
      <div className="flex border-b dark:border-primaryDark dark:bg-primaryDark">
        {tabs.map((tab) => (
          <button
            key={tab.props.id}
            onClick={() => setActiveTab(tab.props.id)}
            className={`px-4 py-2 text-sm font-bold transition-all duration-300  ${
              activeTab === tab.props.id
                ? "text-primary border-b-4 border-primary"
                : "text-gray-500 hover:text-gray-700 dark:text-textDark dark:hover:text-text"
            }`}
            role="tab"
            aria-selected={activeTab === tab.props.id}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="pt-4 dark:bg-primaryDark">
        {isRemind && (
        <RemindLearning />
        )}
        {tabs.map((child) =>
          activeTab === child.props.id ? child : null
        )}
      </div>
    </div>
  );
};

export { Tabs, Tab };
