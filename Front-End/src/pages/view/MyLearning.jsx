import CartComponent from "../../components/ui/CartComponent";

import { MorkUpData } from "../../lib/data/MorkUpData";
import { Tab, Tabs } from "../../components/ui/Tab";
// Data usages
const data = MorkUpData;
const favouriteCourse = JSON.parse(localStorage.getItem("bookmark")) || [];

const MyLearningPage = () => (
  <section className="dark:bg-primaryDark">
    <div className="w-[80%] mx-auto py-10">
      <p className="font-bold xl:text-5xl text-4xl dark:text-textDark">
        My Learning Page
      </p>
      {/* <TabSection /> */}

      <div>
        <Tabs isRemind={true}>
          <Tab id={1} label="All Courses">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
              {data.map((item) => (
                <CartComponent id={item.id} key={item.id} />
              ))}
            </div>
          </Tab>
          <Tab id={2} label="Wishlist">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
              {
                // Filter data based on the id in favouriteCourses
                data.length != 0 && favouriteCourse.length != 0 ? (
                  data
                    .filter((item) => favouriteCourse.includes(item.id))
                    .map((item) => (
                      <CartComponent id={item?.id} key={item.id} />
                    ))
                ) : (
                  <p className="text-left text-lg font-bold">
                    No Favourite Courses
                  </p>
                )
              }
            </div>
          </Tab>
          <Tab id={3} label="Others">
            <div>Others Content</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </section>
);

export default MyLearningPage;
