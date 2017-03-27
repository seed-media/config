'use strict'

const has = require('lodash.has')
const get = require('lodash.get')
const set = require('lodash.set')
const path = require('path')

class Config {
  constructor (dirname) {
    this.items = require('require-all')({
      recursive: false,
      filters: /(.*)\.js$/,
      dirname: path.resolve(path),
      excludeDirs :  /^\.(git|svn)$/,
    })
  }

  all () {
    return this.items
  }

  has (key) {
    return has(this.items, key)
  }

  get (key, dflt) {
    return get(this.items, key, dflt)
  }

  set (key, value) {
    return set(this.items, key)
  }
}

module.exports = Config
