import { useEffect } from "react";
import { subscribeTo, unsubscribeFrom } from "~/shared/infrastructure/bus";
import { createNote } from "../../core/createNote";

const subscribe = () => subscribeTo("RatesRefreshed", createNote);
const unsubscribe = () => unsubscribeFrom("RatesRefreshed", createNote);

export const useBus = () => {
  useEffect(() => {
    subscribe();
    return unsubscribe;
  }, []);
};

// In general, it can be extracted into a “automatic use case”,
// that would be triggered through UI and call the infrastructure.
