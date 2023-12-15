import { ThingType } from "@my/ui";

export type WrappedThingType<T> = {
  wrapped: boolean;
  wrappedThing: T;
};

export const wrapThing = (daThing: ThingType): WrappedThingType<ThingType> => {
  console.log("wrapping thing", daThing.when);
  return {
    wrapped: true,
    wrappedThing: daThing,
  };
};
