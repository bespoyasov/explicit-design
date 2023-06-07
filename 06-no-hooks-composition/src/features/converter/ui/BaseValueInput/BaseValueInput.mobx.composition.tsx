import { BaseValueInput as Component } from "./BaseValueInput";
import { updateBaseValue } from "../../core/updateBaseValue";
import { useBaseValue } from "../../infrastructure/store";
import { observer } from "mobx-react-lite";

// The composition is almost the same,
// but we need to wrap the component in the `observer` HOC:

export const BaseValueInput = observer(() =>
  Component({ updateBaseValue, useBaseValue })
);

// We also could stop depending on data selector hooks,
// swap them with the data props, and provide them right here,
// in the composition.

// It actually would seem a lot like `connect`
// from earlier days of Redux, when we used `mapStateToProps`.
// Now I can say that it was a fairly good approach
// because of its explicitness =)
