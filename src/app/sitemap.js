export default function sitemap() {
  const baseUrl = 'https://www.rayhan-touboui.tech';

  // Map out all the static routes
  const routes = [
    '',
    '/mission-log',
    '/operator-profile',
    '/side-quests',
    '/skill-tree',
    '/timeline'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
