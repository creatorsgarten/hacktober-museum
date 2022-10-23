# The Hacktoberfest Museum

In order to maintain the awesomeness of developers' ideas for Hacktoberfest, Creatorsgarten has developed https://museum.creatorsgarten.org as a medium for everyone to showcase their fantastic projects and share the guiding concepts that guided them.

## Wanna posts your awesome project?

- [Contribution guidelines](CONTRIBUTING.MD)
- All content that is being added to the [Hacktoberfest Museum](https://museum.creatorsgarten.org) website must respect to the [Hacktoberfest Code of Conduct.](https://do.co/hacktoberconduct)
- 🪄 **AND DON'T FORGET TO CLAIM YOUR TICKET!** via [Eventpop application form.](https://www.eventpop.me/events/13854/application_forms/845/applicants/new)

## All data you need

```ts
export interface CardProps {
  display: "light" | "dark";
  title: string;
  theme: ProjectThemes; /* ("playful" 🎮 | "mindful" 🧠 ); */
  founderName: Founders;
  topic: AcademicTopics;
  githubUrl: string;
  imagePath: string | undefined;
  detail?: DetailedPageProps;
}

export interface DetailedPageProps {
  inspiredBy?: string;
  keywords: string[];
  descriptionMarkdown: string;
  contributingMarkdown?: string;
}
```

## Any idea to make this website better?

Please follow the [Contribution guidelines.](CONTRIBUTING.MD) One more thing ... don't be hesitant to add any extra features you think can enhance this website by generating PR not only to `page/index.astro`.
<br />

# Pillars of Creation

- [**Manassarn Manoonchai**](https://github.com/narze) - original code
- [**Tanakorn Pisnupoomi**](https://github.com/intaniger) - initiate new gallery page based from existing code
- [**Chamikorn Phiwla-oung**](https://github.com/Jabont) - ideation of website's theme
- [**Puvit Pracharktam**](https://github.com/pondspective) - @intaniger's Polaris on getting started with UI design.
- [**Phoomparin Mano**](https://github.com/heypoom) - CI/CD setup and wonderful domain name https://museum.creatorsgarten.org
- [**Nutthapat Pongtanyavichai**](https://github.com/Leomotors) - General Improvements
- [**Surasak Chaisurin**](https://github.com/ryanrw) - Stranger who passed by and contributed the project
- `/* your name are the next one ... */`

![https://www.facebook.com/spaceth/posts/pfbid08ksUhZJPHo1YbkprvybRYfHj5hgqsMGZ46Up8n3FEAaktSUcF5JuJrYRYKSR9azCl](https://stsci-opo.org/STScI-01GFNN3PWJMY4RQXKZ585BC4QH.png)

---

All right, copy-and-paste! https://creatorsgarten.org <br />
In association with [@polaryz.club](https://www.instagram.com/polaryz.club/)
