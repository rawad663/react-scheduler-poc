export interface Topic {
  startDate: string | number | Date;
  endDate: string | number | Date;
  image?: string;
  title?: string;
  allDay?: boolean;
  assetPreviews?: number[];
}

export const topics: Topic[] = [
  {
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    title: "Even longer and super long title loren ipsum to be the lip sum",
    startDate: "2021-04-15",
    // Non-inclusive
    endDate: "2021-04-16",
    allDay: true,
    assetPreviews: [24, 33, 39, 51],
  },
  {
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    title: "Realllllyyy long title loren ipsum to be the lip sum",
    startDate: "2021-04-15",
    endDate: "2021-04-19",
    allDay: true,
    assetPreviews: [24, 33, 39, 51],
  },
  {
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    title: "Always be trying to be the bestest of the best",
    startDate: "2021-04-15",
    endDate: "2021-04-21",
    allDay: true,
    assetPreviews: [24, 33, 39, 51],
  },
];
