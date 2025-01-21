import React from "react";
import { timelineData } from "../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Timeline = () => {
  return (
    <VerticalTimeline>{timelineData.map((element) => {})}</VerticalTimeline>
  );
};

export default Timeline;
