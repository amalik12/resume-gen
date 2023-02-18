const options = { year: 'numeric', month: 'short', timeZone: 'UTC' };
export default (bio, experience, education, projects) => ({
  pageMargins: 30,
  content: [
    {
      columns: [
        {
          text: bio.name,
          style: 'title',
        },
        [
          { text: bio.location, alignment: 'right' },
          {
            text: bio.email,
            link: `mailto:${bio.email}`,
            alignment: 'right',
            decoration: 'underline',
          },
          // {
          //   text: bio.website,
          //   link: bio.website,
          //   alignment: 'right',
          //   decoration: 'underline',
          // },
          {
            text: `github.com/${bio.github}`,
            link: `https://github.com/${bio.github}`,
            alignment: 'right',
            decoration: 'underline',
          },
          {
            text: `gitlab.com/${bio.gitlab}`,
            link: `https://gitlab.com/${bio.gitlab}`,
            alignment: 'right',
            decoration: 'underline',
          },
        ],
      ],
      margin: [0, 0, 0, 5],
    },
    {
      columns: [
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 10,
                  h: 0.7,
                  color: '#000000',
                },
              ],
              margin: [0, 10, 0, 6],
            },
            {
              text: 'Experience',
              style: 'header',
            },
          ],
          width: 100,
        },
        [
          {
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 435,
                h: 1.7,
                color: '#000000',
              },
            ],
            margin: [0, 10, 0, 6],
          },
          ...experience.map((exp) => {
            const start = new Date(exp.startDate);
            const end = exp.endDate ? new Date(exp.endDate) : null;

            return [
              {
                text: [
                  { text: exp.company, style: 'company' },
                  { text: ` / ${exp.title}`, style: 'position' },
                ],
                margin: [0, 0, 0, 2],
              },
              {
                text: `${start.toLocaleDateString(undefined, options)} - ${
                  end ? end.toLocaleDateString(undefined, options) : 'Present'
                }`,
                style: 'date',
              },
              { text: exp.tags.join(', '), style: 'skills' },
              {
                style: 'list',
                ul: exp.description.split('\n'),
                margin: [12, 0, 0, 10],
              },
            ];
          }),
        ],
      ],
    },
    {
      columns: [
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 10,
                  h: 0.7,
                  color: '#000000',
                },
              ],
              margin: [0, 10, 0, 6],
            },
            {
              text: 'Education',
              style: 'header',
            },
          ],
          width: 100,
        },
        [
          {
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 435,
                h: 1.7,
                color: '#000000',
              },
            ],
            margin: [0, 10, 0, 6],
          },
          ...education.map((exp) => {
            const start = new Date(exp.startDate);
            const end = exp.endDate ? new Date(exp.endDate) : null;
            return [
              {
                text: [
                  { text: exp.school, style: 'company' },
                  { text: ` / ${exp.degree}, ${exp.major}`, style: 'position' },
                ],
                margin: [0, 0, 0, 2],
              },
              {
                text: `${start.toLocaleDateString(undefined, options)} - ${
                  end ? end.toLocaleDateString(undefined, options) : 'Present'
                }`,
                style: 'date',
              },
              {
                text: exp.tags.join(', '),
                style: 'skills',
                margin: [0, 0, 0, 10],
              },
            ];
          }),
        ],
      ],
    },
    {
      columns: [
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 10,
                  h: 0.7,
                  color: '#000000',
                },
              ],
              margin: [0, 10, 0, 6],
            },
            {
              text: 'Projects',
              style: 'header',
            },
          ],
          width: 100,
        },
        [
          {
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 435,
                h: 1.7,
                color: '#000000',
              },
            ],
            margin: [0, 10, 0, 6],
          },
          ...projects.map((exp) => {
            const start = new Date(exp.startDate);
            const end = exp.endDate ? new Date(exp.endDate) : null;
            return [
              {
                text: [
                  { text: exp.name, style: 'company' },
                  {
                    text: ' / ',
                    style: 'position',
                  },
                  {
                    text: exp.website,
                    link: exp.website,
                    decoration: 'underline',
                    style: 'position',
                  },
                ],
                margin: [0, 0, 0, 2],
              },
              {
                text: `${start.toLocaleDateString(undefined, options)}${
                  exp.hasEndDate
                    ? ` - ${
                        end
                          ? end.toLocaleDateString(undefined, options)
                          : 'Present'
                      }`
                    : ''
                }`,
                style: 'date',
              },
              { text: exp.tags.join(', '), style: 'skills' },
              {
                style: 'list',
                ul: exp.description.split('\n'),
                margin: [12, 0, 0, 10],
              },
            ];
          }),
        ],
      ],
    },
  ],
  defaultStyle: {
    font: 'Lato',
    fontSize: 8,
  },
  styles: {
    title: {
      fontSize: 20,
      bold: true,
    },
    header: {
      fontSize: 9,
      bold: true,
      italics: true,
      margin: [0, 0, 0, 10],
    },
    company: {
      bold: true,
    },
    date: {
      fontSize: 7,
      color: '#8a8a8a',
      margin: [0, 0, 0, 2],
    },
    skills: {
      bold: true,
      margin: [0, 0, 0, 7],
    },
  },
});
