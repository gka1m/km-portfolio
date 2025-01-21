import React from "react";
import { timelineData } from "../data";

const Timeline = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4 px-4 lg:mb-35">
      <h2 className="my-20 text-white text-center text-4xl">Education</h2>
      {/* <VerticalTimeline>
        {timelineData.map((element) => {
          return (
            <VerticalTimelineElement key={element.id} date={element.date}>
              <h3 className="font-bold text-2xl">{element.title}</h3>
              <h4 className="font-italic text-xl">{element.location}</h4>
              <p>{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline> */}
    </div>
  );
};

export default Timeline;
