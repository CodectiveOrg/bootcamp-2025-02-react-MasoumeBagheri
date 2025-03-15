import { toast } from "react-toastify";

import { Dream } from "../types/dream.type";

import { MODAL_CONTAINER_ID } from "../constants/id";

type ValidationRule = {
  isValid: (dream: Dream) => boolean;
  messageKey: string;
};

const validationRules: ValidationRule[] = [
  {
    isValid: (dream) => Boolean(dream.title?.trim()),
    messageKey: "validation.title.required",
  },
  {
    isValid: (dream) =>
      Boolean(dream.title) && /^[A-Za-z0-9]{3,16}$/.test(dream.title),
    messageKey: "validation.title.length",
  },
  {
    isValid: (dream) => Boolean(dream.description?.trim()),
    messageKey: "validation.description.required",
  },
  {
    isValid: (dream) =>
      Boolean(dream.description) && /^.{1,500}$/.test(dream.description),
    messageKey: "validation.description.length",
  },
  {
    isValid: (dream) => Boolean(dream.date),
    messageKey: "validation.date.required",
  },
  {
    isValid: (dream) => {
      const dreamDate = new Date(dream.date);
      const today = new Date();

      dreamDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      return dreamDate <= today;
    },
    messageKey: "validation.date.pastOnly",
  },
];

export const validateDream = (
  dream: Dream,
  t: (key: string) => string
): boolean => {
  toast.dismiss();

  for (const rule of validationRules) {
    if (!rule.isValid(dream)) {
      toast.error(t(rule.messageKey), { containerId: MODAL_CONTAINER_ID });
      return false;
    }
  }
  return true;
};
