import { http } from "../../services/http";

export const currentProfileApi = (payload: {}) =>
  http.post(`/graphql`, { query });

const query = `{ current_profile ()
  {
    id
    first_name
    last_name
    position
    position2
    avatar
    throws_hand
    bats_hand
    biography
    school_year
    feet
    inches
    weight
    age
    school {
      id
      name
    }
    teams {
      id
       name
      }
      facilities {
        id
        email
        u_name
      }
    }
  }`;
