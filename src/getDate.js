import { DateTime } from "luxon";

const formatToLocalTime = (secs, format = "cccc, dd LLL yyyy") =>
  DateTime.fromSeconds(secs).toFormat(format);

const AddDay = (secs) => DateTime.fromSeconds(secs).weekdayShort;

export { formatToLocalTime, AddDay };
