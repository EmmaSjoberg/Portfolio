export type Project = {
  id: string
  title: string
  tags: string[]
  art: string
}

export const projectData: Project[] = [
  {
    id: 'vehicle',
    title: 'Vehicle Monitoring',
    tags: ['ASP.NET Core', 'MongoDB', 'Dashboards', 'Testing'],
    art: 'art-vehicle',
  },
  {
    id: 'stillia',
    title: 'Stillia',
    tags: ['Android', 'Kotlin', 'UX', 'Product thinking'],
    art: 'art-stillia',
  },
]
