import { ReactNode } from "react";
import { IPath } from "../libs/getAllData";

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
