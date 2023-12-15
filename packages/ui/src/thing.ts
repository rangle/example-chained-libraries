export type ThingType = {
  id: number;
  name: string;
  when: Date;
};

export const createThing = (name: string): ThingType => {
  const when = new Date();
  return {
    id: when.getMilliseconds(),
    name,
    when,
  };
};
