import {Key} from "react";
import {Pacifico} from 'next/font/google'

export const logo = Pacifico({weight: "400", subsets: ["latin"]});

export const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export const isHTMLDialogElement = (
  element: HTMLElement | null
): element is HTMLDialogElement => {
  return element instanceof HTMLDialogElement;
};

export interface EventProps {
  id: string;
  title: string;
  description: string;
  imagesUrl: string[];
  startDate: string | number | Date;
  location: string;
  innerRef?: (node?: Element | null | undefined) => void;
}

export type Event = {
  id: Key | string;
  title: string;
  organizerId: string
  currentAttendees: string | number | boolean;
  likes: number;
  follows: string | number | boolean;
  registrationEndDate: string | number | Date;
  isLiked: string | number | boolean;
  imagesUrl: string[];
  description: string | undefined;
  startDate: string | number | Date;
  location: string | undefined;
  tickets: Ticket[]
  qrCode: string
};

export type Ticket = [
  id: Key | string,
  userId: string,
  eventId: string,
  price: number,
  status: "AVAILABLE" | "PURCHASED",
  availability: number,
  availabilityEndDate: string | number | Date
];
