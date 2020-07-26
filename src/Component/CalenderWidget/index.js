import React from "react";
import data from "../../Asset/data.json";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import "moment-timezone";

const CalenderWidget = (props) => {
  const selMember = data.members[props.ind];
  const groups = [{ id: selMember.id, title: selMember.real_name }];
  const items = selMember.activity_periods.map((a, ind) => ({
    id: ind,
    group: selMember.id,
    title: "",
    start_time: moment.tz(a.start_time, "MMM D YYYY  h:mma", selMember.tz),
    end_time: moment.tz(a.end_time, "MMM D YYYY  h:mma", selMember.tz),
  }));

  return (
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().startOf("year")}
      defaultTimeEnd={moment().endOf("year")}
    />
  );
};

export default CalenderWidget;
