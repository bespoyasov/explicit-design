import type { Converter } from "../../core/types";
import { initialModel } from "./store.initials";

import type { PropsWithChildren } from "react";
import { createContext, useState, useContext } from "react";

type StoreReader = () => Converter;
type StoreWriter = (patch: Partial<Converter>) => void;

type Store = {
  value: Converter;
  read: StoreReader;
  update: StoreWriter;
};

const ConverterContext = createContext<Nullable<Store>>(null);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState<Converter>(initialModel);

  const read = () => value;
  const update: StoreWriter = (patch) =>
    setValue((state) => ({ ...state, ...patch }));

  return (
    <ConverterContext.Provider value={{ value, read, update }}>
      {children}
    </ConverterContext.Provider>
  );
};

export const useStore = () => useContext(ConverterContext)!;
