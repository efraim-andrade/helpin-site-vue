'use strict';

/**
 * Members.js controller
 *
 * @description: A set of functions called "actions" for managing `Members`.
 */

module.exports = {

  /**
   * Retrieve members records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.members.search(ctx.query);
    } else {
      return strapi.services.members.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a members record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.members.fetch(ctx.params);
  },

  /**
   * Count members records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.members.count(ctx.query);
  },

  /**
   * Create a/an members record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.members.add(ctx.request.body);
  },

  /**
   * Update a/an members record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.members.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an members record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.members.remove(ctx.params);
  }
};
