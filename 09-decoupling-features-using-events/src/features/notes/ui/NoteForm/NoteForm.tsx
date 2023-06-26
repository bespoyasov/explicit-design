import type { FormEvent } from "react";
import { useCallback } from "react";

// Notice, that we import the implementation straight away
// but still we keep the dependency direction towards the app core.
import { createNote } from "../../core/createNote";

import { useField } from "~/shared/ui/useField";
import { Input } from "~/shared/ui/Input";

// The “composition” is performed right here, in this very file,
// and yet the modules are decoupled because of the initial splitting.

export function NoteForm() {
  const [value, update, clear] = useField("");

  // The component is “hard-wired” with the specific implementations
  // and it requires some effort to set up the tests for it
  // but we have the possibility to switch to the more decoupled version
  // at any moment later if we decide we need that.

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      createNote(value);
      clear();
    },
    [value]
  );

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Make a note:</span>
        <Input type="text" value={value} onChange={update} />
      </label>
    </form>
  );
}
