const author = "Jayendra Parmar";

const description =
  "The Indian economy is one of the fastest-growing in the world, driven by a mix of technology, manufacturing, and a robust services sector.";
const url = "https://economy-dashboard-phi.vercel.app/";

export const AppMetadata = {
  metadataBase: new URL("https://economy-dashboard-phi.vercel.app/"),
  title: {
    default: `Economy Dashboard | ${author}`,
    template: `%s | ${author}`,
  },
  description: description,
  icons: {
    icon: "/economy-dashboard.ico",
  },
  keywords: [
    "Economy Dashboard",
    "Indian Economy Dashboard",
    "Indian Economy",
    "Economy",
    "Dashboard",
    "GDP",
    "GDP Growth",
    "India",
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  openGraph: {
    title: "Economy Dashboard",
    description: description,
    url: url,
    siteName: "Economy Dashboard",
    images: [
      {
        url: "https://economy-dashboard-phi.vercel.app/screenshot.webp",
        width: 800,
        height: 600,
        alt: "Economy Dashboard",
      },
      {
        url: "https://economy-dashboard-phi.vercel.app/screenshot.webp",
        width: 1800,
        height: 1600,
        alt: "Economy Dashboard",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
