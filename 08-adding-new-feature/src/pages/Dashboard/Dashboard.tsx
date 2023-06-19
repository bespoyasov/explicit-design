import { Converter } from "~/features/converter";
import { Notes } from "~/features/notes";

export function Dashboard() {
  return (
    <>
      <Converter />
      <Notes />
    </>
  );
}
