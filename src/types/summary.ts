import { AddOnCardProps } from "./addons";
import { Plan } from "./plans";

export type SummaryCardProps = {
  plan: Plan | undefined;
  addOns: AddOnCardProps[] | undefined;
};
