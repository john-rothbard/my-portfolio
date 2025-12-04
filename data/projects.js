// /data/projects.js

const projects = [
    {
      id: "seismic",
      title: "Earthquake Sim",
      subtitle:"Developed a 0-1 enterprise application.",
      image: "/simsscreenshot.png",
      description: `
        I worked in dedicated team to build an enterprise-grade software application for KPFF, an engineering firm.
        I was the head of the UI/UX, as well as backend work for camera implementation and data graphing.
      `,
      bullets: [
        "Realtime, 60FPS Earthquake Simulations",
        "Clients found the software to expedite workflow",
        "UI/UX pioneered and designed by me"
      ],
      gallery: ["/seismic1.png", "/seismic2.png"],
      link: "https://github.com/example",
    },
  
    {
      id: "songvert",
      title: "Song Converter",
      subtitle:"Spotify -> Soundcloud Fuzzy Finder.",
      image: "/placeholder.jpeg",
      description: `
        Safari extension + iOS app that converts any Apple Music link to the
        equivalent Spotify track using fuzzy search and API lookups.
      `,
      bullets: [
        "Built with Swift + MusicKit",
        "Fuzzy matching between AM ↔ Spotify",
        "Runs fully on-device"
      ],
      gallery: ["/songvert.png"],
    },

    {
        id: "testing",
        title: "Hamburger Helper Developer",
        image: "/placeholder.jpeg",
        description: `
          Safari extension + iOS app that converts any Apple Music link to the
          equivalent Spotify track using fuzzy search and API lookups.
        `,
        bullets: [
          "Built with Swift + MusicKit",
          "Fuzzy matching between AM ↔ Spotify",
          "Runs fully on-device"
        ],
        gallery: ["/songvert.png"],
      },

      {
        id: "testing2",
        title: "Euthanasia",
        image: "/placeholder.jpeg",
        description: `
          Safari extension + iOS app that converts any Apple Music link to the
          equivalent Spotify track using fuzzy search and API lookups.
        `,
        bullets: [
          "Built with Swift + MusicKit",
          "Fuzzy matching between AM ↔ Spotify",
          "Runs fully on-device"
        ],
        gallery: ["/songvert.png"],
      }
  ];
  
  export default projects;
  