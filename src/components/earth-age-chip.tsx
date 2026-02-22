"use client";

import { useEffect, useMemo, useState } from "react";

const IST_TIME_ZONE = "Asia/Kolkata";
const DOB_IST = {
  year: 2004,
  month: 2,
  day: 20,
  hour: 14,
  minute: 45,
  second: 0,
};

const IST_PARTS_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: IST_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

const IST_CLOCK_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: IST_TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

type IstDateParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function daysInMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function getIstParts(date: Date): IstDateParts {
  const parts = IST_PARTS_FORMATTER.formatToParts(date);
  const values: Partial<IstDateParts> = {};

  for (const part of parts) {
    if (part.type === "year") values.year = Number(part.value);
    if (part.type === "month") values.month = Number(part.value);
    if (part.type === "day") values.day = Number(part.value);
    if (part.type === "hour") values.hour = Number(part.value);
    if (part.type === "minute") values.minute = Number(part.value);
    if (part.type === "second") values.second = Number(part.value);
  }

  return values as IstDateParts;
}

function getCurrentAgeInIst(nowMs: number) {
  const now = getIstParts(new Date(nowMs));

  let years = now.year - DOB_IST.year;
  let months = now.month - DOB_IST.month;
  let days = now.day - DOB_IST.day;
  let hours = now.hour - DOB_IST.hour;
  let minutes = now.minute - DOB_IST.minute;
  let seconds = now.second - DOB_IST.second;

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    let previousMonth = now.month - 1;
    let previousMonthYear = now.year;

    if (previousMonth === 0) {
      previousMonth = 12;
      previousMonthYear -= 1;
    }

    days += daysInMonth(previousMonthYear, previousMonth);
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    ageText: `${years}y ${months}m ${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)} IST`,
    clockText: `${IST_CLOCK_FORMATTER.format(new Date(nowMs))} IST`,
  };
}

export default function EarthAgeChip() {
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setNowMs(Date.now());
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const age = useMemo(
    () => (nowMs === null ? null : getCurrentAgeInIst(nowMs)),
    [nowMs]
  );

  return (
    <div className="earth-age-chip">
      <span aria-hidden className="earth-globe" />
      <span className="earth-age-text">
        <span className="earth-age-value">
          {age ? `Grinding since: ${age.ageText}` : "Grinding since: syncing..."}
        </span>
        <span className="earth-age-live">
          {age ? `IST now: ${age.clockText}` : "IST now: --:--:--"}
        </span>
      </span>
    </div>
  );
}
