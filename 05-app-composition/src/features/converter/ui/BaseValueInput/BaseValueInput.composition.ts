import { BaseValueInput as Component } from "./BaseValueInput";
import { useUpdateBaseValue } from "../../core/updateBaseValue";
import { useBaseValue } from "../../infrastructure/store";

export const BaseValueInput = () =>
  Component({ useUpdateBaseValue, useBaseValue });
