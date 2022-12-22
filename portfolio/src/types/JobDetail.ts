interface JobDetail {
  id: number;
  title: string;
  detailTitle: string;
  location: string;
  timeline: string;
  technologies: Array<string>;
  description: Array<string>;
  company: string;
}
export default JobDetail;
