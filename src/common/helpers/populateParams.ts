import { Schema } from 'mongoose';

export function populateQuery<T extends Schema>(p: string, t: T): string[] {
  if (!p || p === '') return [];
  const obj = Object.keys(t.obj).filter((key) => {
    if (t.obj[key]['ref']) {
      return true;
    }
    if (Array.isArray(t.obj[key]['type']) && t.obj[key]['type'][0]?.ref) {
      return true;
    }
    return false;
  });
  const params = p.split(',');
  const paramsTrimmed = [];
  params.forEach((param) => {
    const p = param.trim();
    if (p !== '' && obj.includes(p)) paramsTrimmed.push(p.trim());
  });
  return paramsTrimmed;
}
