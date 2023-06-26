import { useBus } from "../../infrastructure/bus";
import { NoteForm } from "../NoteForm";

export function Notes() {
  useBus();

  return (
    <section>
      <h2 className="visually-hidden">Notes</h2>
      <NoteForm />
    </section>
  );
}
