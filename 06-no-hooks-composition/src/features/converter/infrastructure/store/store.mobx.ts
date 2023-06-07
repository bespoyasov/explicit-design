import type {
  Converter,
  ExchangeRates,
  QuoteCurrencyCode,
} from "../../core/types";

interface ConverterService {
  update(patch: Partial<Converter>): void;
}

export class ConverterViewModel implements Converter, ConverterService {
  // In a real app, we'd probably need
  // to encapsulate the data more thoroughly
  // and express invariants as methods of the class.
  // I decided to not implement getters and setters
  // and all that “OOP shaman dance” just for this example.

  public readonly baseCode = "RPC";
  public quoteCode: QuoteCurrencyCode = "IMC";
  public baseValue = 0;
  public quoteValue = 0;

  public rates: ExchangeRates = {
    DRG: 2,
    IMC: 3,
    RPC: 1,
    WPU: 0.5,
    ZKL: 0.8,
  };

  // Of course, in a real MobX app,
  // we'd make the updates more granular.

  public update(patch: Partial<Converter>): void {
    if (patch.rates) this.rates = patch.rates;
    if (patch.baseValue) this.baseValue = patch.baseValue;
    if (patch.quoteValue) this.quoteValue = patch.quoteValue;
  }

  // We even possibly would model the domain
  // using classes and OOP, so that the public API
  // of “domain services” or “application services”
  // would fit the MobX-way of composing the app.
  // This code is just an example.
}
