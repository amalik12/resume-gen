const options = { year: "numeric", month: "short", timeZone: "UTC" };
export default (bio, experience, education, projects) => ({
  content: [
    {
      canvas: [
        {
          type: "rect",
          x: 0,
          y: 0,
          w: 430,
          h: 3,
          color: "#3065c7",
        },
      ],
    },
    {
      columns: [
        {
          text: bio.name,
          style: "title",
        },
        [
          { text: bio.location, alignment: "right" },
          {
            text: bio.email,
            link: `mailto:${bio.email}`,
            alignment: "right",
            decoration: "underline",
          },
          {
            text: bio.website,
            link: bio.website,
            alignment: "right",
            decoration: "underline",
          },
          {
            text: bio.github,
            link: bio.github,
            alignment: "right",
            decoration: "underline",
          },
        ],
      ],
      margin: [0, 10, 0, 5],
    },
    {
      text: "Experience",
      style: "header",
    },
    experience.map((exp) => {
      const start = new Date(exp.startDate);
      const end = exp.endDate ? new Date(exp.endDate) : null;

      return [
        {
          text: [
            { text: exp.title, style: "position" },
            { text: ` - ${exp.company}`, style: "company" },
          ],
          margin: [0, 0, 0, 2],
        },
        {
          text: `${start.toLocaleDateString(undefined, options)} - ${
            end ? end.toLocaleDateString(undefined, options) : "Present"
          }`,
          style: "date",
        },
        { text: exp.tags.join(", "), style: "skills" },
        {
          style: "list",
          ul: exp.description.split("\n"),
          margin: [0, 0, 0, 10],
        },
      ];
    }),
    {
      text: "Education",
      style: "header",
    },
    education.map((exp) => [
      {
        text: [
          { text: `${exp.degree}, ${exp.major}`, style: "position" },
          { text: ` - ${exp.school}`, style: "company" },
        ],
      },
      { text: exp.date, style: "date" },
      { text: exp.tags.join(", "), style: "skills", margin: [0, 0, 0, 10] },
    ]),
    {
      text: "Projects",
      style: "header",
    },
    projects.map((exp) => [
      {
        text: [
          { text: exp.name, style: "position" },
          {
            text: " - ",
            style: "company",
          },
          {
            text: exp.website,
            link: exp.website,
            decoration: "underline",
            style: "company",
          },
        ],
      },
      { text: exp.date, style: "date" },
      { text: exp.tags.join(", "), style: "skills" },
      {
        style: "list",
        ul: exp.description.split("\n"),
        margin: [0, 0, 0, 20],
      },
    ]),
  ],
  defaultStyle: {
    fontSize: 8,
  },
  styles: {
    title: {
      fontSize: 20,
      color: "#3065c7",
    },
    header: {
      fontSize: 12,
      color: "#3065c7",
      bold: true,
      margin: [0, 0, 0, 10],
    },
    position: {
      bold: true,
    },
    date: {
      color: "#8a8a8a",
      margin: [0, 0, 0, 2],
    },
    skills: {
      bold: true,
      margin: [0, 0, 0, 7],
    },
  },
});
