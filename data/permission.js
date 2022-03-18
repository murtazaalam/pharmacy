exports.managerPermission = {
  inventory: {
    read: true,
    create: true,
    delete: true,
    update: true,
  },
  order: {
    read: true,
    create: true,
    delete: true,
    update: true,
  },
  team: {
    read: true,
    create: true,
    delete: true,
    update: true,
  },
};
exports.salesPermission = {
  inventory: {
    read: false,
    create: false,
    delete: false,
    update: false,
  },
  order: {
    read: true,
    create: true,
    delete: true,
    update: false,
  },
  team: {
    read: false,
    create: false,
    delete: false,
    update: false,
  },
};
