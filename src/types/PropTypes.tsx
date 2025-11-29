import { ReactNode } from "react";

export interface ISlider {
  path: IPath;
  title: string;
  fetchDelayMs?: number;
}

export interface ISliderContent {
  id: number;
  img: string;
  title: string;
  rate: number | string;
  desc: string;
}

export interface ISliderWrapper {
  path: IPath;
  title: string;
  children: ReactNode;
}

export interface IObserverProps {
  children: ReactNode;
  skeleton: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export type IPath =
  | "seasons/now" //Currently Airing This Season
  | "season/later" //Latest Anime
  | "seasons/upcoming" //Upcoming / Not Yet Aired (Future)
  | "top/anime?page=1" //Trends
  | "recommendations/anime" //Recent Anime Recommendations
  | "anime?filter[year]=2025&order_by=score&sort=desc&limit=20" //Best of 2025
  | string; //custom
