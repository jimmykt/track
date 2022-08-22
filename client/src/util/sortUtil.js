export const sortAscending = (category, contactInfo) => {
  if (!contactInfo) {
    return function (a, b) {
      if (a[category] < b[category]) {
        return -1;
      }
      if (a[category] > b[category]) {
        return 1;
      }
      return 0;
    };
  } else {
    return function (a, b) {
      if (a.contact[contactInfo] < b.contact[contactInfo]) {
        return -1;
      }
      if (a.contact[contactInfo] > b.contact[contactInfo]) {
        return 1;
      }
      return 0;
    };
  }
};

export const sortDescending = (category, contactInfo) => {
  if (!contactInfo) {
    return function (a, b) {
      if (a[category] > b[category]) {
        return -1;
      }
      if (a[category] < b[category]) {
        return 1;
      }
      return 0;
    };
  } else {
    return function (a, b) {
      if (a.contact[contactInfo] > b.contact[contactInfo]) {
        return -1;
      }
      if (a.contact[contactInfo] < b.contact[contactInfo]) {
        return 1;
      }
      return 0;
    };
  }
};
