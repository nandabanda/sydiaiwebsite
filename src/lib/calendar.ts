import { webinarEvent } from "@/data/webinar";

const EVENT_TITLE = `${webinarEvent.series}: ${webinarEvent.title}`;
const EVENT_DESCRIPTION = `${webinarEvent.subtitle}\n\n${webinarEvent.description}\n\nSpeaker: ${webinarEvent.speaker.name}, ${webinarEvent.speaker.title}\n\nRegister: https://www.sydiai.com/enterprise-conversations-planiq`;

function toIcsDate(iso: string): string {
  return iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function generateIcsContent(): string {
  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const uid = `planiq-webinar-${webinarEvent.startUtc}@sydiai.com`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SYDIAI//Enterprise Conversations//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${toIcsDate(webinarEvent.startUtc)}`,
    `DTEND:${toIcsDate(webinarEvent.endUtc)}`,
    `SUMMARY:${EVENT_TITLE}`,
    `DESCRIPTION:${EVENT_DESCRIPTION.replace(/\n/g, "\\n")}`,
    "LOCATION:Online",
    "STATUS:CONFIRMED",
    "ORGANIZER;CN=SYDIAI:mailto:engage@sydiai.com",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function getGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${toIcsDate(webinarEvent.startUtc)}/${toIcsDate(webinarEvent.endUtc)}`,
    details: EVENT_DESCRIPTION,
    location: "Online",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function getOutlookCalendarUrl(): string {
  const params = new URLSearchParams({
    subject: EVENT_TITLE,
    body: EVENT_DESCRIPTION,
    startdt: webinarEvent.startUtc,
    enddt: webinarEvent.endUtc,
    location: "Online",
    allday: "false",
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function getTeamsCalendarUrl(): string {
  const params = new URLSearchParams({
    subject: EVENT_TITLE,
    content: EVENT_DESCRIPTION,
    startTime: webinarEvent.startUtc,
    endTime: webinarEvent.endUtc,
    onlineMeetingProvider: "teamsForBusiness",
  });
  return `https://teams.microsoft.com/l/meeting/new?${params.toString()}`;
}

export function downloadIcsFile(): void {
  const content = generateIcsContent();
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "sydiai-enterprise-conversations-planiq.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
