import {gql} from 'graphql-request';
import { graphcms } from '../client';

export const getProjects=async()=>{
    const getProjectsquery=gql`
    {
        projects {
          title
          id
          tags
          image {
            url
          }
          source
          description
        }
      }
    `;
    const {projects}=await graphcms.request(getProjectsquery);
    return projects;
}