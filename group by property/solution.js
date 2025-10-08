const groupByProperty = (arr) => {
  const ans = {};

  arr.forEach((item) => {
    if (ans[item.type]) {
      ans[item.type] = [...ans[item.type], item.name];
    } else {
      ans[item.type] = [item.name];
    }
  });

  return ans;
};

/*----------------------------------------------------------------------------------------------------------------------------*/

const groupByProperty2 = (arr) => {
  const ans = {};

  arr.forEach(({ name, type }) => {
    if (!ans[type]) ans[type] = [];
    ans[type].push(name);
  });

  return ans;
};

/*----------------------------------------------------------------------------------------------------------------------------*/

const groupByProperty3 = (arr) => {
  return arr.reduce((acc, { name, type }) => {
    if (!acc[type]) acc[type] = [];
    acc[type].push(name);
    return acc;
  }, {});
};
