import React from "react";
import { timelineData } from "../data";

interface Event {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
}

const Timeline = () => {
  return (
    <div className="border-b border-neutral-900 border-transparent pb-4 px-4 lg:mb-35">
      <h2 className="my-20 text-white text-center text-4xl">Education</h2>
      <div className="relative">
        <div className="flex flex-col space-y-12">
          {timelineData.map((event) => (
            <div key={event.id} className="flex flex-col items-center">
              <Circle />
              <Pillar />
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-blue-500 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-fullw-2 h-full bg-blue-500 mx-auto"></div>
  );
};

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <h3 className="text-xl font-semibold text-white">{event.title}</h3>
      <p className="text-sm text-gray-500">{event.location}</p>
      <p className="text-md text-white">{event.description}</p>
      <p className="text-sm text-gray-400">{event.date}</p>
    </div>
  );
};
export default Timeline;
