export const getAllCourses: any[] = [
  { id: 10, name: 'Angular basics', desc: '' },
  { id: 11, name: 'Angular routing', desc: '' },
  { id: 12, name: 'Angular cli', desc: '' },
  { id: 13, name: 'Angular performance', desc: '' },
  { id: 14, name: 'Angular change detection', desc: '' },
  { id: 15, name: 'Angular modules', desc: '' }
];

export const getCourse = (id: number) => getAllCourses.find(course => course.id === id);
