import { Anime } from "./apiResponse";
import { FormEvent, ReactNode } from "react";

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

export interface IPricingCard {
  title: string;
  description: string;
  price: number;
  features: string[];
  period: string;
  buttonText: string;
}

type overlayToggle = (
  type: "search" | "menu",
  isShow: boolean | "toggle"
) => void;

export interface INavBarContent {
  showMenu: boolean;
  handleOverlayToggle: overlayToggle;
}

export interface ISearchBar {
  showSearchBar: boolean;
  handleOverlayToggle: overlayToggle;
}

export interface IMenu {
  showMenu: boolean;
  showCategories: boolean;
  handleShowCategory: () => void;
  handleOverlayToggle: overlayToggle;
}

export type IPath =
  | "seasons/now" //Currently Airing This Season
  | "season/later" //Latest Anime
  | "seasons/upcoming" //Upcoming / Not Yet Aired (Future)
  | "top/anime?page=1" //Trends
  | "recommendations/anime" //Recent Anime Recommendations
  | "anime?filter[year]=2025&order_by=score&sort=desc&limit=20" //Best of 2025
  | string; //custom

export interface IAuthView {
  isError: boolean;
  isRegister: boolean;
  loginHandler: (e: FormEvent<HTMLFormElement>) => void;
  registerHandler: (e: FormEvent<HTMLFormElement>) => void;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IimageSection {
  data: Anime;
  isLiked: boolean;
  onToggle?: () => void;
}

export interface IReviewButton {
  dataLength: number;
  reviewCount: number;
  showMore: () => void;
  showLess: () => void;
}
