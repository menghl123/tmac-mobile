export function isTrueProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();
    return (val === 'true' || val === 'on' || val === '');
  }
  return !!val;
}

export function extend(child: any, parent: any) {
  if (parent && child) {
    Object.keys(parent).forEach(key => {
      child[key] = parent[key];
    })
  }
}

export function removeArrayItem(array: any[], item: any) {
  const index = array.indexOf(item);
  return !!~index && !!array.splice(index, 1);
}
