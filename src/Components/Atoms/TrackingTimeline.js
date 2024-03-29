import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import dayjs from "dayjs";
import { getStatusColor } from "../../Utils/Helpers";

export default function TrackingTimeline({ status, details }) {
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 1,
          },
        }}
      >
        {(status === "In Transit" || status === "Created") && (
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              Awaiting update...
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={"warning"} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>In Transit</TimelineContent>
          </TimelineItem>
        )}
        {status === "Delivered" && (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color={"success"} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Delivered</TimelineContent>
          </TimelineItem>
        )}
        {status === "Need Action" && (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color={"error"} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Action Needed</TimelineContent>
          </TimelineItem>
        )}

        {details?.map((ele, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="textSecondary">
                {dayjs(ele.date).format("MM/DD/YYYY")}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={getStatusColor(status)} />
                {index !== details?.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>{ele.description}</TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
