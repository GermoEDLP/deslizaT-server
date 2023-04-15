import { QueryFindAllDto } from '../dtos/query-find-all.dto';
interface IFindAllOptions {
  sort?: any;
  limit?: number;
  skip?: number;
}

interface IFindAllQuery {
  page?: number | string;
  perPage?: number | string;
}
export const getFindAllOptions = (query: QueryFindAllDto): [IFindAllOptions, number, number] => {
  const { page, perPage } = query;
  const p = page ? Number(page) : 0;
  const pp = perPage ? Number(perPage) : 10;
  const options = {
    sort: {
      createdAt: -1,
    },
  };

  if (pp > 0) {
    options['limit'] = pp;
    options['skip'] = p * pp;
  } else {
    options['limit'] = 0;
    options['skip'] = 0;
  }
  return [options, p, pp];
};
