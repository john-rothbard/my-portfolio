// /data/projects.js

const projects = [
    {
      id: "seismic",
      title: "Earthquake Sim",
      subtitle:"Developed a 0-1 enterprise application.",
      image: "/simsscreenshot.png",
      description: `
        I worked in a dedicated team to build an enterprise-grade software application for KPFF, an engineering firm.
        I was the head of the UI/UX, as well as backend work for camera implementation and data graphing.
      `,
      bullets: [
        "Realtime, 60FPS Earthquake Simulations",
        "Clients found the software to expedite workflow",
        "UI/UX pioneered and designed by me"
      ],
      gallery: ["/simsscreenshot.png"],
      link: "https://github.com/example",
    },

    {
        id: "weathermap",
        title: "Weather Map",
        subtitle:"Java full-stack weather map.",
        image: "/weatherMap4.png",
        description: `
          Personally developed a realtime weather map, integrating REST API data ingestion into a postgreSQL database.
          Pulls data from US cities, showcased with a heatmap utilizing IDW to interpolate temperature -> color.
        `,
        bullets: [
          "Built with Spring Boot and Java",
          "PostgreSQL for the backend, openweathermap API, React for the frontend",
          "Full-stack Realtime Java Application."
        ],
        gallery: ["/weatherMap3.png", "/weatherMap2.png"],
      },


      {
        id: "searchengine",
        title: "UCI Search Engine",
        subtitle:"50,000 page search engine.",
        image: "/searchengine6.png",
        description: `
          Designed and built web search engine, encompassing crawling, indexing, and query processing.
          Used disk-based indexing for 50,000+ pages with partial merges to efficiently optimize RAM usage.
        `,
        bullets: [
          "Used TF-IDF and weights for ranking results.",
          "<300ms response times.",
          "Made with python."
        ],
        gallery: ["/searchEngine8.png", "/searchEngine1.png"],
      }

     /* {
        id: "monalisa",
        title: "'Mona Lisa'",
        subtitle:"OpenCV facial tracking.",
        image: "/simsscreenshot.png",
        description: `
          Learned alot about OpenCV and made a face/eye/pupil tracking software. Had lots of fun experimenting with this one.
        `,
        bullets: [
          "Made with Python's OpenCV library.",
          "Real-time facial tracking with DNN face detection + Haar cascade for eyes.",
          "Looks pretty cool."
        ],
        gallery: ["/songvert.png"],
      }

       {
      id: "songvert",
      title: "Song Converter",
      subtitle:"Spotify -> Soundcloud Fuzzy Finder.",
      image: "/simsscreenshot.png",
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
    },*/
  ];
  
  export default projects;
  