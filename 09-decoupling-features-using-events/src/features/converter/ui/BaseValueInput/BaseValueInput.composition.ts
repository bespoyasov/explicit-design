import { BaseValueInput as Component } from "./BaseValueInput";
import { updateBaseValue } from "../../core/updateBaseValue";
import { useBaseValue } from "../../infrastructure/store";

export const BaseValueInput = () =>
  Component({ updateBaseValue, useBaseValue });
