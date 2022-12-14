import { useMemo } from 'react';
import { Time } from './Time';
import { Line } from './Line';
import * as dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
interface TimeLineProps {
  timesEvents: string[];
}

export const TimeLine = ({ timesEvents }: TimeLineProps) => {
  const timeArr = useMemo(() => {
    return Array(24 * 4)
      .fill(0)
      .map((_, i) => {
        return ('0' + ~~(i / 4) + ':0' + 60 * ((i / 4) % 1)).replace(/\d(\d\d)/g, '$1');
      });
  }, []);

  return (
    <div
      className="flex
    flex-col  ">
      {timeArr.map((time, i) => {
        return (
          <div key={i}>
            <div className="relative ">
              <div className=""></div>
              <Time time={time} />
              <div>
                {timesEvents
                  .filter(
                    item =>
                      Date.parse(`01/01/2011 ${item}:00`) > Date.parse(`01/01/2011 ${time}:10`) &&
                      Date.parse(`01/01/2011 ${item}:00`) <
                        Date.parse(`01/01/2011 ${timeArr[i + 1]}:10`)
                  )
                  .map((eventTime, j) => (
                    <div key={j}>{eventTime}</div>
                  ))}
              </div>
              <Line time={time} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
