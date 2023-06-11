export type messageEmote = {
  id: string;
  start: number;
  end: number;
};

export type messageEmotesReturn = Array<messageEmote>;

export function messageEmotes(rawEmotes: string): messageEmotesReturn {
  if (!(rawEmotes ?? undefined)) return [];
  let r = [];
  rawEmotes?.split("/")?.forEach((a) => {
    let b = a.split(":");
    let c = b[0];
    let d = b[1];
    d.split(",").map((e) => {
      let f = e.split("-");
      r.push({
        id: c,
        start: parseInt(f[0]),
        end: parseInt(f[1]),
      });
    });
  });

  return r;
}
